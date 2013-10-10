if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
        'use strict';
        if (this == null) {
            throw new TypeError();
        }
        var n, k, t = Object(this),
            len = t.length >>> 0;

        if (len === 0) {
            return -1;
        }
        n = 0;
        if (arguments.length > 1) {
            n = Number(arguments[1]);
            if (n != n) { // shortcut for verifying if it's NaN
                n = 0;
            } else if (n != 0 && n != Infinity && n != -Infinity) {
                n = (n > 0 || -1) * Math.floor(Math.abs(n));
            }
        }
        if (n >= len) {
            return -1;
        }
        for (k = n >= 0 ? n : Math.max(len - Math.abs(n), 0); k < len; k++) {
            if (k in t && t[k] === searchElement) {
                return k;
            }
        }
        return -1;
    };
}

function randomFromInterval(from, to)
{
    return Math.floor(Math.random() * (to -from +1) +from);
}

//sortQuestions: function(randomize) {
function sortQuestions(randomize) {
    randomize = randomize || false;

    var questions = [[],[],[],[],[],[],[],[],[],[]];

    // Add questions to corresponding the category array
    for (var i in questionsDataBase) {
        var q = questionsDataBase[i];
        questions[q.category].push(q.id);
    }

    if (randomize) {
        // Randomize arrays
        for (var j in questions) {
            questions[j].sort(function() { return Math.round(Math.random())-0.5; });
        }
    }

    // create category index array
/*
     var html = 'var category = [';
     for (var j in questions) {
         html += '[';
         var cat = questions[j];
         for (var c = 0; c < cat.length; c++) {
             if (cat[c]) {
                 if (c > 0) html += ',';
                 html += cat[c];
             }
         }
         html += ']';
         if (j < 9) html += ',';
     }
     html += '];';
*/
    /*
     // create normalized index array with PHP4 questions
     var html = 'var indexNormalizedPHP4 = [0,';
     for (var j in category) {
     var cat = category[j];
     for (var c = 0; c < cat.length; c++) {
     if (cat[c] > 0) html += cat[c] + ',';
     }
     }
     html += '];';
     */
    /*
     // create normalized index array without PHP4 questions
     var html = 'var indexNormalized = [0,';
     for (var j in category) {
         if (j != CAT_PHP4) {
             var cat = category[j];
             for (var c = 0; c < cat.length; c++) {
                 if (cat[c] > 0) html += cat[c] + ',';
             }
         }
     }
     html += '];';
    */
     $("body").html(html);
}

/*
 // Change CSS
 iphone.css <> android.css
 // SyntaxHighlighter
 Android css: <link type="text/css" rel="Stylesheet" href="js/syntax/styles/shThemeRDark.css"/>
 IOS css: <link rel='stylesheet' type='text/css' href='js/syntax/styles/shThemeDefault.css'>
*/