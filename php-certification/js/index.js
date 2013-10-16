// config data
var BOOKMARK = localStorage.getItem("PHPEXAM_BOOKMARK");
var BOOKMARK_ID = localStorage.getItem("PHPEXAM_BOOKMARK_ID");
var LAST_QUESTION_SEEN = localStorage.getItem("LAST_QUESTION_SEEN") || 1;

// categories
var CAT_BASIC = 0;
var CAT_WEB = 1;
var CAT_OOP = 2;
var CAT_SECURITY = 3;
var CAT_DATA = 4;
var CAT_IO = 5;
var CAT_STRINGS = 6;
var CAT_DB = 7;
var CAT_ARRAYS = 8;
var CAT_PHP4 = 9;

// modes
var MODE_ALL_MINUS_PHP4 = 0; // default, all except PHP4;
var MODE_ALL = 1; // all;
var MODE_CATEGORY = 2; // showing one category

// jqTouch
$.jQTouch({
    statusBar: 'black-translucent',
    preloadImages: []
});

// version
var VERSION = "FREE";
var AD_COUNTER = 6;
var adCounter = 0;

// app Object
var app = {

    numQuestions: index.length,     // all questions = Object.keys(questionsDataBase).length
    mode: MODE_ALL_MINUS_PHP4,      // by default all the questions except those of PHP4

    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },

    // Bind any events that are required on startup. Common events are: 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('DOMContentLoaded', this.onDeviceReady, false);
    },

    onDeviceReady: function() {

        // control inclusion of PHP4 questions
        $('input#php4-questions').on('change', function (e) {
            if ($(this).is(':checked')) app.changeMode(indexNormalizedPHP4, MODE_ALL);
            else app.changeMode(indexNormalized, MODE_ALL_MINUS_PHP4)
        });

        // control filtering of questions
        $('select#choose-category-select').on('change', function (e) {
            var filter = $(this).val();
            if (filter == 0) app.changeMode(indexNormalized, MODE_ALL_MINUS_PHP4);
            if (filter == 1) app.changeMode(indexNormalizedPHP4, MODE_ALL);
            if (filter >= 20) {
                var indexCat = filter-20;
                app.changeMode(category[indexCat], MODE_CATEGORY);
            }
        });

        // build questions links
        app.buildQuestions(BOOKMARK);
        // build questions pagination
        app.buildQuestionsPagination();
        // set bookmark
        app.buildBookmarkQuestion();

        // hide question and re-write loading
        $('.question-out').hammer().on("tap", function (e) {
            app.setQuestionTitle('Loading...');

            // rebuild questions list
            var qid = $(".question-info").attr('qid');
            var qNum = app.questionNumberFromId(qid);
            app.buildQuestions(qNum);
            // rebuild bookmark question
            app.buildBookmarkQuestion();
        });

        // about button
        $("#infoButton").hammer().on("tap", function (e) {
            jQT.goTo($('#about'), 'slideup');
        });

        $("#aboutClose").hammer().on("tap", function (e) {
            jQT.goBack('#home');
        });

        // if we are reloading a question
        if (window.location.hash) {
            app.goToQuestion(LAST_QUESTION_SEEN);
        }

        // random question
        $("#random-question-link").hammer().on("tap", function (e) {
            var questionNumber = randomFromInterval(1, (index.length -1));
            app.goToQuestion(questionNumber);
        });

        // pro version close button
        $("#pro-version-ad-close").hammer().on("tap", function (e) {
            $("#jqt #pro-version-ad").addClass("none");
        });
    },

    setQuestionTitle: function(title, qId) {
        $("#page-bookmark").remove();
        $("#bookmark-button").remove();
        $('#question .toolbar h1').html(title);

        if ( qId && (app.mode == MODE_ALL_MINUS_PHP4 || app.mode == MODE_ALL) ) {
            if ( qId == BOOKMARK_ID ) {
                $('#question .toolbar').append('<div id="page-bookmark"></div>');
            }
            else {
                if ( !$('#question .toolbar #bookmark-button').length ) {
                    $('#question .toolbar').append('<a class="button" id="bookmark-button" href="#"><img src="img/bookmark_v5.png" /><div>flag</div></a>');
                }
            }
        }
    },

    setQuestionContent: function(content) {
        $('#question-content').html(content);
        // Syntax highlighter
        SyntaxHighlighter.highlight();
        // show content
        $('#question-content').show();
        // format checkbox and radio buttons
        $('li.question-answer input').iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue',
            //increaseArea: '20%',
            labelHover: false,
            cursor: true
        });
        // bind LI for the click
        $(".question-answer").on("click", function (e) {
            var aid = $(this).attr('aid');
            $(this).find('input[id="'+aid+'"]').iCheck('toggle');
        });
    },

    buildQuestions: function(from, stepBack, stepForward) {
        from = from || 1;
        var html, qid;
        stepBack = typeof stepBack !== "undefined" ? stepBack : 4;
        stepForward = typeof stepForward !== "undefined" ? stepForward : 5;
        var prev = ( ( from - stepBack ) > 0 ) ? (from - stepBack) : 1;
        var next = ( ( prev + stepBack + stepForward ) >= app.numQuestions ) ? app.numQuestions : ( prev + stepBack + stepForward );

        $("#questions-list").html('');
        for (var i = 1; i < index.length; i++) {
            if ( i && ( i >= prev ) && ( i <= next) ) {
                qid = app.questionIdFromNumber(i);
                html = '<li class="arrow">' +
                    '<a href="#question" data-question-number="'+i+'" class="slide question-token">' +
                    'Question '+i+
                    ((qid == BOOKMARK_ID && (app.mode == MODE_ALL_MINUS_PHP4 || app.mode == MODE_ALL)) ? '<div class="bookmark"></div>' : '') +
                    (localStorage.getItem("PHPEXAM_QUESTION_"+qid) ? '<small class="counter">DONE</small>' : '') +
                    '</a></li>';
                $("#questions-list").append(html);
            }
        }

        // write loading, show and load question
        $('.question-token').hammer().on("tap", function (e) {
            var questionNumber = this.getAttribute('data-question-number');

            app.goToQuestion(questionNumber);
        });

    },

    buildQuestionsPagination: function() {
        var itemsPerPage = 10;
        var numQuestions = app.numQuestions;
        var numPages = Math.ceil(numQuestions / 10);
        var html = '';

        $("#questions-pagination").html('');
        for (var i = 0; i < numPages; i++) {
            html = '<li class="pagination" data-page="'+i+'">'+(i+1)+'</li>';
            $("#questions-pagination").append(html);
        }

        // pagination tap bind
        $("#questions-pagination .pagination").hammer().on("tap", function (e) {
            var page = this.getAttribute('data-page');
            app.buildQuestions( (page*10)+1, 0, 9 );
        });
    },

    buildBookmarkQuestion: function() {
        var html = '<span class="no-bookmark">Without bookmark</span>';

        if (BOOKMARK) {
            html = '<a href="#question" data-question-number="'+BOOKMARK+'" class="slide question-token">Bookmark: <span id="bookmark-question">Question '+BOOKMARK+'</span></a>';
        }
        $("#bookmark-question").html(html);

        // go to bookmark
        $("#bookmark-question a").hammer().on("tap", function (e) {
            var questionNumber = this.getAttribute('data-question-number');
            app.goToQuestion(questionNumber);
        });
    },

    setBookmark: function (el) {
        var qid = $(".question-info").attr('qid');
        var qNum = app.questionNumberFromId(qid);

        BOOKMARK = qNum;
        BOOKMARK_ID = qid;
        localStorage.setItem('PHPEXAM_BOOKMARK', qNum);
        localStorage.setItem('PHPEXAM_BOOKMARK_ID', qid);

        el.remove();
        $('#question .toolbar').append('<div id="page-bookmark"></div>');
    },

    setLastQuestionSeen: function (qnum) {
        LAST_QUESTION_SEEN = qnum;
        localStorage.setItem('LAST_QUESTION_SEEN', qnum);
    },

    questionNumberFromId: function (id) {
        return index.indexOf(parseInt(id));
    },

    questionIndexFromId: function (id) {
        return 'q'+id;
    },

    questionIdFromNumber: function (num) {
        var index = app.questionIndexFromNumber(num);
        return app.questionIdFromIndex(index);
    },

    questionIndexFromNumber: function (num) {
        return 'q'+index[num];
    },

    questionIdFromIndex: function (index) {
        return questionsDataBase[index].id;
    },

    questionNumberFromIndex: function (index) {
        return app.questionNumberFromId(app.questionIdFromIndex(index));
    },

    answerIdFromQuestionId: function (qid) {
        if (qid) {
            var qnum = questions['q'+qid].num;
            if (qnum) {
                return 'a'+qnum;
            }
        }
        return 0;
    },

    isInArray: function(value, array) {
        return (array.indexOf(parseInt(value)) !== -1);
    },

    resolveQuestion: function () {
        var error = false;
        var qid = $(".question-info").attr('qid');
        var qindex = app.questionIndexFromId(qid);
        var answer = questionsDataBase[qindex].answer;

        $.each($('.question-answer input'), function () {
            var parent = $(this).parent().parent();
            var wrap = $(this).parent();
            // check if the answer is a "TEXT" one
            if (answer.correct[0] && (typeof answer.correct[0] == "string")) {
                $(this).addClass('noborder');
                if ( $(this).val().toUpperCase() == answer.correct[0].toUpperCase() ) {
                    if (parent.hasClass('answer-incorrect')) {
                        parent.removeClass('answer-incorrect');
                    }
                    parent.addClass('answer-correct');
                    $('#free_form_answer_text').html('Correct!');
                }
                else {
                    if (parent.hasClass('answer-correct')) {
                        parent.removeClass('answer-correct');
                    }
                    parent.addClass('answer-incorrect');
                    error = true;
                    $('#free_form_answer_text').html('Incorrect, correct answer is: '+answer.correct[0]);
                }
            }
            // answer is radio or checkbox
            else {
                if ( wrap.hasClass('checked') ) {
                    if ( app.isInArray($(this).val(), answer.correct ) ) {
                        if (parent.hasClass('answer-incorrect')) {
                            parent.removeClass('answer-incorrect');
                        }
                        parent.addClass('answer-correct');
                    }
                    else {
                        if (parent.hasClass('answer-correct')) {
                            parent.removeClass('answer-correct');
                        }
                        parent.addClass('answer-incorrect');
                        error = true;
                    }
                }
                else {
                    if ( app.isInArray($(this).val(), answer.correct ) ) {
                        if (parent.hasClass('answer-correct')) {
                            parent.removeClass('answer-correct');
                        }
                        parent.addClass('answer-incorrect');
                        error = true;
                    }
                    else {
                        if (parent.hasClass('answer-incorrect')) {
                            parent.removeClass('answer-incorrect');
                        }
                    }
                }
            }
        });
        if (!error) {
            localStorage.setItem("PHPEXAM_QUESTION_"+qid, "OK");
            $('#resolve-question').remove();
        }
    },

    goToQuestion: function (questionNumber) {
        // set question as last seen
        app.setLastQuestionSeen(questionNumber);
        // start loading and show
        app.setQuestionTitle('Loading...');
        $('#question-content').hide();
        var title = 'Question ' + questionNumber;
        var qid = app.questionIdFromNumber(questionNumber);
        var qindex = app.questionIndexFromNumber(questionNumber);

        // show question
        var questionContent = app.buildQuestion(questionNumber);
        app.setQuestionTitle(title, qid);
        app.setQuestionContent(questionContent);
        app.buildQuestionButtons(qindex, questionNumber);

        // pro version ad control
        if (adCounter >= AD_COUNTER) {
            // show pro version ad
            if ($("#jqt #pro-version-ad").hasClass("none")) {
                $("#jqt #pro-version-ad").removeClass("none");
                var adLayer = document.getElementById('pro-version-ad');
				adLayer.scrollIntoView();
            }
            // reset counter
            adCounter = 0;
        }
        else {
            adCounter++;
        }
    },

    buildQuestionButtons: function(qindex, qNum) {
        qNum = parseInt(qNum);
        var explanation = questionsDataBase[qindex].answer.explanation;
        var links = questionsDataBase[qindex].answer.link;
        if ( !$('#question-content #question-buttons').length ) {
            $('#question-content').append('<div id="question-buttons">' +
                '<div id="question-comments" style="display:none;"></div>' +
                '<a href="#" class="whiteButton" id="resolve-question">Resolve</a>' +
                ((explanation.length) ? '<a href="#" class="whiteButton" id="show-comments">Show explanation</a>' : '') +
                ((!explanation.length && links.length) ? '<a href="#" class="whiteButton" id="show-comments">Show links</a>' : '') +
                ((qNum == 1) ? '' : '<a href="#" class="whiteButton" id="prev-question">Previous</a>') +
                ((qNum == app.numQuestions) ? '' : '<a href="#" class="whiteButton" id="next-question">Next</a>') +
                '</div>');
            $('#question-content').append(app.buildHelpLink());
        }

        // button to resolve question
        $('#resolve-question').hammer().on("tap", function (e) {
            app.resolveQuestion();
        });

        // bind bookmark button
        $('#bookmark-button').hammer().on("tap", function (e) {
            app.setBookmark($(this));
        });

        // show comments
        $('#show-comments').hammer().on("tap", function (e) {
            var qid = $(".question-info").attr('qid');
            app.buildComments(qid);
            $(this).remove();
        });

        // button to previous question
        $('#prev-question').hammer().on("tap", function (e) {
            var q = parseInt(qNum) -1;
            app.goToQuestion(q);
        });

        // button to next question
        $('#next-question').hammer().on("tap", function (e) {
            var q = parseInt(qNum) +1;
            app.goToQuestion(q);
        });

        // button to hint number of answers
        $('.question-answer-note').hammer().on("tap", function (e) {
            app.showHint();
        });
    },

    buildComments: function (qid) {
        var layer = $('#question-comments');
        var index = app.questionIndexFromId(qid);

        // start loading and show
        layer.html('Loading...');

        // show question
        if (questionsDataBase[index].answer.link[0] && $("#help-links-container").hasClass("none")) {
            $("#help-links-container").removeClass("none");
        }
        if (questionsDataBase[index].answer.explanation[0]) {
            layer.show();
            layer.html(questionsDataBase[index].answer.explanation[0].replace('\\n', '<br />'));
        }
    },

    buildHelpLink: function () {
        var qid = $(".question-info").attr('qid');
        var index = app.questionIndexFromId(qid);
        var answer = questionsDataBase[index].answer;
        var links = answer.link;

        if (links.length > 0) {
            var html = '<ul id="help-links-container" class="individual none">';
            for (var i = 0, j = links.length; i < j; i++) {
                html += '<li><a href="#" onclick="var ref = window.open(\''+links[i]+'\', \'_system\'); return false;" class="question-help">'+links[i]+'</a></li>';
            }
            html += '</ul>';
        }
        else {
            html = '';
        }
        return html;
    },

    buildQuestion: function(qNum) {
        var index = app.questionIndexFromNumber(qNum);
        var id = app.questionIdFromIndex(index);
        var aChoose = (questionsDataBase[index].type != 3) ?
            '' :
            '<div id="question-'+id+'-answer-note" class="question-answer-note question-hint button"><span id="hintTitle">How many answers?</span><span id="hintText" class="none">Choose '+questionsDataBase[index].answer.correct.length+'</span></div>';
        return '<div id="question-{$count}">' +
                '<div id="question-'+id+'-info" class="question-info" qnum="'+qNum+'" qid="'+id+'" style="display:none;"></div>' +
                '<div id="question-'+id+'-number" class="question-number"></div>' +
                '<div id="question-'+id+'-text" class="question-text">' +
                    questionsDataBase[index].text +
            '</div>' +
                '<div id="question-'+id+'-answer" class="question-answer">' +
                    aChoose +
                    '<form id="question-'+id+'-form" onsubmit="return false;">' +
                        '<ul>' +
                            app.buildAnswers(qNum) +
                        '</ul>' +
                    '</form>' +
                '</div>' +
            '</div>';
    },

    buildAnswers: function(qNum) {
        var index = app.questionIndexFromNumber(qNum);
        var answer = questionsDataBase[index].answer;
        var id = app.questionIdFromIndex(index);
        var type = questionsDataBase[index]["type"];
        var html = ''; var pos = 1; var i;

        switch (type) {
            case 1:
                // Open question
                html += '<li class="question-answer" aid="'+id+'_1">'+
                    '<input type="text" name="answer" id="'+id+'_1"/>'+
                    '<label for="'+id+'_1" id="free_form_answer_text">&nbsp;<i>Write response</i></label>'+
                    '</li>';
                break;
            case 2:
                for (i = 0; i < answer.options.length; i++) {
                    pos = i+1;
                    // Single answer
                    html += '<li class="question-answer" aid="'+id+'_'+pos+'">'+
                            '<input type="radio" name="answer" value="'+pos+'" id="'+id+'_'+pos+'"/>'+
                            '<label for="'+id+'_'+pos+'">'+answer.options[i]+'</label>'+
                        '</li>';
                }
                break;
            case 3:
                for (i = 0; i < answer.options.length; i++) {
                    pos = i+1;
                    // Multiple answer
                    html += '<li class="question-answer" aid="'+id+'_'+pos+'">'+
                            '<input name="answer[]" type="checkbox" value="'+pos+'" id="'+id+'_'+pos+'"/>'+
                            '<label for="'+id+'_'+pos+'">'+answer.options[i]+'</label>'+
                        '</li>';
                }
                break;
            default:
                break;
        }

        return html;
    },

    showHint: function() {
        var el = $(".question-answer-note");
        if (el.hasClass("button")) {
            el.removeClass("button");
            el.find("span#hintTitle").addClass("none");
            el.find("span#hintText").removeClass("none");
        }
    },

    changeMode: function(questions, mode) {
        var position = 1;
        index = questions;
        app.numQuestions = index.length;
        app.mode = mode;

        if (mode == MODE_ALL) {
            $("#bookmark-question").show();
            $("#include-php4-option").show();
            position = BOOKMARK;
        }
        if (mode == MODE_ALL_MINUS_PHP4) {
            $("#bookmark-question").show();
            $("#include-php4-option").show();
            position = BOOKMARK;
        }
        if (mode == MODE_CATEGORY) {
            $("#bookmark-question").hide();
            $("#include-php4-option").hide();
        }

        app.buildQuestions(position);
        app.buildQuestionsPagination();
    },

    showCategory: function(categoryId) {
        app.changeMode(category[categoryId], MODE_CATEGORY);
    }
};