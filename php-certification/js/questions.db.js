/*
    TYPE:
    1 = Open Question
    2 = Single answer
    3 = multiple choice

    CATEGORY:
    0 = PHP Basics
    1 = Web Features
    2 = Object Oriented Programming
    3 = Security
    4 = Data Format & Types (XML)
    5 = Input/Output
    6 = Strings & Patterns
    7 = Databases
    8 = Arrays
    9 = PHP4 vs PHP5 (deprecated for PHP 5.3 certification, DO NOT USE FOR TESTS)
*/
var indexById = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244];
var indexNormalizedPHP4 = [0,236,212,186,192,233,10,9,168,193,184,210,89,83,90,213,85,230,87,29,31,101,25,27,175,205,234,208,95,34,42,36,91,38,93,39,96,130,128,219,122,179,129,123,132,133,149,218,224,202,159,154,147,203,191,198,61,60,72,76,63,71,222,92,119,113,142,116,120,114,118,121,111,45,44,181,43,53,137,51,56,54,108,104,103,107,109,105,106,110,146];
var indexNormalized = [0,236,212,186,192,233,10,9,168,193,184,210,89,83,90,213,85,230,87,29,31,101,25,27,175,205,234,208,95,34,42,36,91,38,93,39,96,130,128,219,122,179,129,123,132,133,149,218,224,202,159,154,147,203,191,198,61,60,72,76,63,71,222,92,119,113,142,116,120,114,118,121,111,45,44,181,43,53,137,51,56,54];
var category = [[168,196,193,233,6,11,13,212,9,174],[184,85,84,210,231,188,80,221,230,89],[205,24,223,208,29,27,204,100,240,172],[228,144,41,97,98,40,96,42,91,35],[134,219,127,179,138,123,122,135,130,243],[151,218,202,149,191,158,156,200,148,155],[60,74,187,238,71,59,75,67,198,65],[113,119,112,115,114,120,116,111,139,118],[47,45,56,199,51,52,33,50,58,55],[108,104,103,107,109,105,106,110,146]];
var index = indexNormalized;

var questionsDataBase = {
    q1: {
        id: 1,
        text: 'Which of the following tags are an acceptable way to begin a PHP Code block?',
        type: 3,
        category: 0,
        answer: {
            options: ['&lt;SCRIPT LANGUAGE="php"&gt;', '&lt;!', '&lt;%', '&lt;?php', '&lt;?'],
            correct: [1, 3, 4, 5],
            link: ["http://php.net/manual/en/language.basic-syntax.phpmode.php"],
            explanation: []
        }
    },
    q2: {
        id: 2,
        text: 'Which of the following are valid PHP variables?',
        type: 3,
        category: 0,
        answer: {
            options: ['@$foo', '&amp;$variable', '${0x0}', '$variable', '$0x0'],
            correct: [1, 2, 3, 4],
            link: ["http://php.net/manual/en/language.variables.php"],
            explanation: ["@$foo is a valid $foo variable with the @ error control operator attached to it. \n&amp;$variable is a valid $variable variable with the & reference operator attached to it. \n${0x0} uses a valid curly braces syntax, anything inside the braces will be interpolated. So 0x0 will be interpolated to 0 and stored as a variable with the name 0."]
        }
    },
    q3: {
        id: 3,
        text: 'What is the best way to iterate and modify every element of an array using PHP 5?',
        type: 2,
        category: 8,
        answer: {
            options: ['You cannot modify an array during iteration', 'for($i = 0; $i &lt; count($array); $i++) { /* ... */ }', 'foreach($array as $key =&gt; &amp;$val) { /* ... */ }', 'foreach($array as $key =&gt; $val) { /* ... */ }', 'while(list($key, $val) = each($array)) { /* ... */'],
            correct: [3],
            link: ["http://php.net/manual/en/control-structures.foreach.php"],
            explanation: ["As stated in PHP manual (see link): \"In order to be able to directly modify array elements within the loop precede $value with &. In that case the value will be assigned by reference.\""]
        }
    },
    q4: {
        id: 4,
        text: 'What is the output of the following PHP code?\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\ndefine(\'FOO\', 10);\n$array = array(10 =&gt; FOO, "FOO" =&gt; 20);\nprint $array[$array[FOO]] * $array["FOO"];\n?&gt;\n</pre>',
        type: 2,
        category: 0,
        answer: {
            options: ['FOO', '100', '200', '20', '10'],
            correct: [3],
            link: ["http://www.php.net/manual/en/function.define.php", "http://php.net/manual/en/language.constants.php"],
            explanation: ["Another tricky question. \n$array[\"FOO\"] = 20, but $array[FOO] = 10, because FOO has been defined as a constant."]
        }
    },
    q5: {
        id: 5,
        text: 'What is the output of the following PHP script?\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\n$a = 1;\n$b = 2.5;\n$c = 0xFF;\n$d = $b + $c;\n$e = $d * $b;\n$f = ($d + $e) % $a;\nprint ($f + $e);\n?&gt;\n</pre>',
        type: 2,
        category: 0,
        answer: {
            options: ['643.75', '432', '643', '257', '432.75'],
            correct: [1],
            link: ["http://en.wikipedia.org/wiki/Hexadecimal", "http://www.php.net/manual/en/language.operators.arithmetic.php"],
            explanation: ["0xFF is the hexadecimal notation for 255 \n The operator % is the modulus, but it only takes into account the integer part of the number, so 643.75 % 1 = 0"]
        }
    },
    q6: {
        id: 6,
        text: 'What combination of boolean values for <code>$a</code>, <code>$b</code>, <code>$c</code>, and <code>$d</code> will result in the variable <code>$number</code> being equal to <code>3</code>?\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\n$a = null;\n$b = null;\n$c = null;\n$d = null;\nif($a &amp;&amp; !$b) { \n\tif(!!$c &amp;&amp; !$d) { \n\t\tif($d &amp;&amp; ($a || $c)) { \n\t\t\tif(!$d &amp;&amp; $b) { \n\t\t\t\t$number = 1; \n\t\t\t} \n\t\t\telse { \n\t\t\t\t$number = 2; \n\t\t\t} \n\t\t} \n\t\telse { \n\t\t\t$number = 3; \n\t\t} \n\t} \n\telse { \n\t\t$number = 4; \n\t} \n} \nelse { \n\t$number = 5;\n}\n?&gt;\n</pre>',
        type: 2,
        category: 0,
        answer: {
            options: ['false, true, true, true', 'true, false, true, false', 'true, true, false, false', 'false, true, true, false', 'false, false, true, false'],
            correct: [2],
            link: ["http://www.php.net/manual/en/language.operators.logical.php"],
            explanation: ["Fastest way to answer this question is to take a look at the first condition ($a &amp;&amp; !$b), so $a have to be TRUE and $b have to be FALSE. Only one answer provides this combination."]
        }
    },
    q7: {
        id: 7,
        text: 'What is the output of the following code?\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\n$string = "111221";\n\nfor($i = 0; $i &lt; strlen($string); $i++) {\n\t$current = $string[$i];\n\t$count = 1;\n\twhile(isset($string[$i + $count]) &amp;&amp; ($string[$i + $count] == $current)) \n\t\t$count++;$newstring .= "$count{$current}";\n\t$i += $count-1;\n}\n\nprint $newstring;\n?&gt;\n</pre>',
        type: 2,
        category: 0,
        answer: {
            options: ['312211', '3312212', '11221221', '221131', '3211122'],
            correct: [1],
            link: ["http://stackoverflow.com/questions/2596837/curly-braces-in-string-in-php", "http://php.net/manual/en/language.types.string.php"],
            explanation: ["The only difficult part in this script are the curly braces. Anything inside of it will be evaluated individually."]
        }
    },
    q8: {
        id: 8,
        text: 'What is the best way to ensure that a user-defined function is always passed an object as its single parameter?',
        type: 2,
        category: 0,
        answer: {
            options: ['function myfunction(stdClass $a)', 'function myfunciton($a = stdClass)', 'Use is_object() within the function', 'There is no way to ensure the parameter will be an object', 'function myfunction(Object $a)'],
            correct: [1],
            link: ["http://php.net/manual/en/language.oop5.typehinting.php"],
            explanation: ["Check the type hinting section in php manual. The correct answer is 1 because the stdClass is the base class, 5 is not correct because you cant define an user-created object as the parameter."]
        }
    },
    q9: {
        id: 9,
        text: 'What does the following function do, when passed two integer values for <code>$p</code> and <code>$q</code>?\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\nfunction magic($p, $q) { \n\treturn ($q == 0) ? $p : magic($q, $p % $q);\n}\n?&gt;\n</pre>',
        type: 2,
        category: 0,
        answer: {
            options: ['Loops infinitely', 'Switches the values of $p and $q', 'Determines if they are both even or odd', 'Determines the greatest common divisor between them', 'Calculates the modulus between the two'],
            correct: [4],
            link: ["http://en.wikipedia.org/wiki/Euclidean_algorithm", "http://php.net/manual/en/language.operators.comparison.php"],
            explanation: ["A simple implementation of the Euclidian algorithm. \nIf you are wondering what the \"?\" does, it's the ternary operator (search it in the provided link to the PHP manual)"]
        }
    },
    q10: {
        id: 10,
        text: 'The <code>____</code> operator is used to test if two values are identical in every way.',
        type: 2,
        category: 0,
        answer: {
            options: ['!==', 'instanceof', '=', '==', '==='],
            correct: [5],
            link: ["http://www.php.net/manual/en/language.operators.comparison.php"],
            explanation: []
        }
    },
    q11: {
        id: 11,
        text: 'What would go in place of <code>??????</code> below to make this script execute without a fatal error?\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\n$a = 1;\n$b = 0;\n\n??????\n\n$c = $a / $b;\n?&gt;\n</pre>',
        type: 3,
        category: 0,
        answer: {
            options: ['quit();', 'die();', 'stop();', '__halt_compiler();', 'exit();'],
            correct: [2, 4, 5],
            link: ["http://www.php.net/manual/en/function.die.php", "http://php.net/manual/en/function.halt-compiler.php", "http://www.php.net/manual/en/function.exit.php"],
            explanation: ["die() and exit() terminates the execution, __halt_compiler() halts the execution of the compiler."]
        }
    },
    q12: {
        id: 12,
        text: 'What is the output of the following?\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\n$a = 010;\n$b = 0xA;\n$c = 2;\nprint $a + $b + $c;\n?&gt;\n</pre>',
        type: 2,
        category: 0,
        answer: {
            options: ['20', '22', '18', '$a is an invalid value', '2'],
            correct: [1],
            link: ["http://en.wikipedia.org/wiki/Octal", "http://en.wikipedia.org/wiki/Hexadecimal"],
            explanation: ["$a is a number with octal notation, so $a = 010 = 8; \n$b is a number with hexadecimal notation, so $b = 0xA = 10; \nCheck the PHP manual for different notations."]
        }
    },
    q13: {
        id: 13,
        text: 'What is the output of the following?\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\n$a = 20;\n\nfunction myfunction($b) {\n\t$a = 30;\n\tglobal $a, $c;\n\treturn $c = ($b + $a);\n}\n\nprint myfunction(40) + $c;\n?&gt;\n</pre>',
        type: 2,
        category: 0,
        answer: {
            options: ['120', 'Syntax Error', '60', '70'],
            correct: [1],
            link: ["http://php.net/manual/en/language.variables.scope.php"],
            explanation: ["The variable $a equals to 20 because the by nature of it being defined outside the function it IS a global variable. \nThe global declaration within the function tells the function to use the global value, rather than the local value of 30."]
        }
    },
    q14: {
        id: 14,
        text: 'What would you replace <code>???????</code> with, below, to make the string <code>Hello, World!</code> be displayed?\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\nfunction myfunction() { \n\t???????\n\tprint $string;\n}\n\nmyfunction("Hello, World!");\n?&gt;\n</pre>',
        type: 2,
        category: 0,
        answer: {
            options: ['There is no way to do this', '$string = $argv[1];', '$string = $_ARGV[0];', 'list($string) = func_get_args();', '$string = get_function_args()'],
            correct: [4],
            link: ["http://www.php.net/manual/en/function.func-get-args.php", "http://www.php.net/manual/en/function.list.php"],
            explanation: ["func_get_args() returns the function parameters and list() assigns them as if it were an array."]
        }
    },
    q15: {
        id: 15,
        text: 'What is the output of the following function?\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\nfunction &amp;find_variable(&amp;$one, &amp;$two, &amp;$three) {\n\tif($one &gt; 10 &amp;&amp; $one &lt; 20) return $one;\n\tif($two &gt; 10 &amp;&amp; $two &lt; 20) return $two;\n\tif($three &gt; 10 &amp;&amp; $three &lt; 20) return $three;\n}\n\n$one = 2;\n$two = 20;\n$three = 15;\n$var = &amp;find_variable($one, $two, $three);\n$var++;\nprint "1: $one, 2: $two, 3: $three";\n?&gt;\n</pre>',
        type: 2,
        category: 0,
        answer: {
            options: ['1: 2, 2: 20, 3: 15', '1: 3, 2:21, 3:16', '1: 2, 2:21, 3:15', '1: 3, 2: 20, 3: 15', '1: 2, 2: 20, 3: 16'],
            correct: [5],
            link: ["http://www.php.net/manual/en/functions.returning-values.php", "http://www.php.net/manual/en/language.references.return.php", "http://www.php.net/manual/en/language.references.pass.php"],
            explanation: ["Function returns a reference to $three, therefore incrementing $var also increments $three."]
        }
    },
    q16: {
        id: 16,
        text: 'For an arbitrary string <code>$mystring</code>, which of the following checks will correctly determine if the string <code>PHP</code> exists within it?',
        type: 2,
        category: 6,
        answer: {
            options: ['if(strpos($mystring, "PHP") !== false)', 'if(!strpos($mystring,"PHP"))', 'if(strpos($mystring, "PHP") === true)', 'if(strloc($mystring, "PHP") == true)', 'if(strloc($mystring, "PHP") === false)'],
            correct: [1],
            link: ["http://php.net/manual/en/function.strpos.php", "http://www.php.net/manual/en/language.types.boolean.php", "http://www.php.net/manual/en/language.operators.comparison.php"],
            explanation: ["strpos() will look for the desired value (PHP in this case) in $string. If found then it will return the position of the first match, otherwise it will return FALSE. \nThe operator !== is used so that if \"PHP\" is found in the 0 position, it'll be not converted to FALSE by means of type juggling."]
        }
    },
    q17: {
        id: 17,
        text: 'What are the values of <code>$a</code> in <code>$obj_one</code> and <code>$obj_two</code> when this script is executed?\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\nclass myClass { \n\tprivate $a; \n\n\tpublic function __construct() { \n\t\t$this-&gt;a = 10; \n\t} \n\n\tpublic function printValue() { \n\t\tprint "The Value is: {$this-&gt;a}"; \n\t} \n\n\tpublic function changeValue($val, $obj = null) { \n\t\tif(is_null($obj)) { \n\t\t\t$this-&gt;a = $val; \n\t\t} \n\t\telse { \n\t\t\t$obj-&gt;a = $val; \n\t\t} \n\t} \n\n\tpublic function getValue() { \n\t\treturn $this-&gt;a; \n\t}\n}\n\n$obj_one = new myClass();\n$obj_two = new myClass();\n$obj_one-&gt;changeValue(20, $obj_two);\n$obj_two-&gt;changeValue($obj_two-&gt;getValue(), $obj_one);\n$obj_two-&gt;printValue();\n$obj_one-&gt;printValue();\n?&gt;\n</pre>',
        type: 2,
        category: 2,
        answer: {
            options: ['10,20', 'You cannot modify private member variables of a different class', '20,20', '10,10', '20,10'],
            correct: [3],
            link: ["http://php.net/manual/en/language.oop5.visibility.php", "http://php.net/manual/en/language.oop5.references.php"],
            explanation: ["For the PHP 5.3 certification, the correct answer is be 20, 20 (objects pointers as passed by copy, but it's as if objects themselves are always \"passed\" by reference). \nIn PHP4, objects are passed by value and as such the correct answer would be 10, 10"]
        }
    },
    q18: {
        id: 18,
        text: 'What are the three access modifiers that you can use in PHP objects?',
        type: 3,
        category: 2,
        answer: {
            options: ['protected', 'public', 'static', 'private', 'final'],
            correct: [1, 2, 4],
            link: ["http://php.net/manual/en/language.oop5.visibility.php"],
            explanation: ["The keywords static and final are not considered access modifiers."]
        }
    },
    q19: {
        id: 19,
        text: 'When checking to see if two variables contain the same instance of an object, which of the following comparisons should be used?',
        type: 2,
        category: 2,
        answer: {
            options: ['if($obj1-&gt;equals($obj2) &amp;&amp; ($obj1 instanceof $obj2))', 'if($obj1-&gt;equals($obj2))', 'if($obj1 === $obj2)', 'if($obj1 instanceof $obj2)', 'if($obj1 == $obj2)'],
            correct: [3],
            link: ["http://www.php.net/manual/en/language.oop5.object-comparison.php", "http://php.net/manual/en/internals2.opcodes.instanceof.php"],
            explanation: ["For the PHP 5.3 certification: \n($obj1 == $obj2) is TRUE if they have the same same values \n($obj1 === $obj2) is TRUE only if they are the same instance"]
        }
    },
    q20: {
        id: 20,
        text: 'In PHP 5 you can use the <code>______</code> operator to ensure that an object is of a particular type. You can also use <code>_______</code> in the function declaration.',
        type: 2,
        category: 0,
        answer: {
            options: ['instanceof, is_a', 'instanceof, type-hinting', 'type, instanceof', '===, type-hinting', '===, is_a'],
            correct: [2],
            link: ["http://php.net/manual/en/internals2.opcodes.instanceof.php", "http://php.net/manual/en/language.oop5.typehinting.php"],
            explanation: ["instanceof will check for the object type, while === will check if two comparing objects are the same instance"]
        }
    },
    q21: {
        id: 21,
        text: 'Does the following code accomplish it\'s purpose?\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\nfunction duplicate($obj) {\n\t$newObj = $obj;\n\treturn $newObj;\n}\n\n$a = new MyClass();\n$a_copy = duplicate($a);\n$a-&gt;setValue(10);\n$a_copy-&gt;setValue(20);\n?&gt;\n</pre>',
        type: 2,
        category: 0,
        answer: {
            options: ['Return value have to be &amp;$newObj', 'Yes, it does', 'duplicate() must accept its parameter by reference (with &amp;)', 'You must use the clone operator to make a copy of an object', 'duplicate() must return a reference (with &amp; in fornt of the function name)'],
            correct: [4],
            link: ["http://php.net/manual/en/language.oop5.cloning.php"],
            explanation: ["When assigning one object (variable) to another the object is not duplicated, just a reference to the object is copied. \nWhen you want to duplicated an object, this is called \"cloning\" an is achieved as follows: <pre>$objectA = clone $objectB;</pre>"]
        }
    },
    q22: {
        id: 22,
        text: 'How can you modify the copy of an object during a clone operation?',
        type: 2,
        category: 0,
        answer: {
            options: ['Put the logic in the object\'s constructor to alter the values', 'Implment your own function to do object copying', 'Implement the object\'s __clone() method', 'Implement __get() and __set() methods with the correct logic', 'Implement the __copy() method with the correct logic'],
            correct: [3],
            link: ["http://php.net/manual/en/language.oop5.cloning.php"],
            explanation: ["When an object is cloned, the method __clone is automatically called (see link to the manual section)"]
        }
    },
    q23: {
        id: 23,
        text: 'What is the primary difference between a method declared as static and a normal method?',
        type: 2,
        category: 0,
        answer: {
            options: ['Static methods can only be called using the :: syntax and never from an instance', 'Static methods do not provide a reference to $this', 'Static methods cannot be called from within class instances', 'Static methods don\'t have access to the self keyword', 'There is no functional difference between a static and non-static method'],
            correct: [2],
            link: ["http://php.net/manual/en/language.oop5.static.php"],
            explanation: ["$this is a reference to the object instance and, as such, static functions can not make use of it."]
        }
    },
    q24: {
        id: 24,
        text: 'What is the output of the following script?\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\nclass ClassOne { \n\tprotected $a = 10; \n\n\tpublic function changeValue($b) { \n\t\t$this-&gt;a = $b; \n\t}\n}\n\nclass ClassTwo extends ClassOne { \n\tprotected $b = 10; \n\n\tpublic function changeValue($b) { \n\t\t$this-&gt;b = 10; \n\t\tparent::changeValue($this-&gt;a + $this-&gt;b); \n\t} \n\n\tpublic function displayValues() { \n\t\tprint "a: {$this-&gt;a}, b: {$this-&gt;b}"; \n\t}\n}\n\n$obj = new ClassTwo();\n$obj-&gt;changeValue(20);\n$obj-&gt;changeValue(10);\n$obj-&gt;displayValues();\n?&gt;\n</pre>',
        type: 2,
        category: 2,
        answer: {
            options: ['a: 30, b: 30', 'a: 30, b: 20', 'a: 30, b: 10', 'a: 20, b: 20', 'a: 10, b: 10'],
            correct: [3],
            link: ["http://php.net/manual/en/language.oop5.visibility.php"],
            explanation: ["This is a tricky question, because ClassTwo::changeValue() never changes $this->b value."]
        }
    },
    q25: {
        id: 25,
        text: 'The <code>______</code>keyword is used to indicate an incomplete class or method, which mustbe further extended and/or implemented in order to be used.',
        type: 2,
        category: 2,
        answer: {
            options: ['final', 'protected', 'incomplete', 'abstract', 'implements'],
            correct: [4],
            link: ["http://php.net/manual/en/language.oop5.abstract.php"],
            explanation: []
        }
    },
    q26: {
        id: 26,
        text: 'To ensure that a given object has a particular set of methods, you must provide a method list in the form of an <code>________</code> and then attach it as part of your class using the <code>________</code> keyword.',
        type: 2,
        category: 2,
        answer: {
            options: ['array, interface', 'interface, implements', 'interface, extends', 'instance, implements', 'access-list, instance'],
            correct: [2],
            link: ["http://php.net/manual/en/language.oop5.interfaces.php"],
            explanation: []
        }
    },
    q27: {
        id: 27,
        text: 'Type-hinting and the <code>instanceof</code> keyword can be used to check what types of things about object variables?',
        type: 3,
        category: 2,
        answer: {
            options: ['If a particular child class extends from it', 'If they are an instance of a particular interface', 'If they are an abstract class', 'If they have a particular parent class', 'If they are an instance of a particular class'],
            correct: [2, 4, 5],
            link: ["http://php.net/manual/en/language.operators.type.php"],
            explanation: []
        }
    },
    q28: {
        id: 28,
        text: 'In PHP 5\'s object model, a class can have multiple <code>______</code> but only a single direct <code>________</code>.',
        type: 2,
        category: 2,
        answer: {
            options: ['None of the above', 'interfaces, child', 'children, interface', 'interfaces, parent', 'parents, interface'],
            correct: [4],
            link: ["http://php.net/manual/en/language.oop5.interfaces.php", "http://php.net/manual/en/keyword.extends.php"],
            explanation: ["A class can have only one parent, can implement many interfaces and can have many childs that extends from it."]
        }
    },
    q29: {
        id: 29,
        text: 'Whatthree special methods can be used to perform special logic in the eventa particular accessed method or member variable is not found?',
        type: 3,
        category: 2,
        answer: {
            options: ['__get($variable)', '__call($method, $params)', '__get($method)', '__set($variable, $value)', '__call($method)'],
            correct: [1, 2, 4],
            link: ["http://php.net/manual/en/language.oop5.overloading.php"],
            explanation: []
        }
    },
    q30: {
        id: 30,
        text: 'The <code>_______</code> method will be called automatically when an object is represented as a string.',
        type: 2,
        category: 2,
        answer: {
            options: ['getString()', '__get()', '__value()', '__toString()', '__getString()'],
            correct: [4],
            link: ["http://www.php.net/manual/en/language.oop5.magic.php#language.oop5.magic.tostring"],
            explanation: ["When representing as string, PHP will attempt to call the function __toString() to define the conversion."]
        }
    },
    q31: {
        id: 31,
        text: 'When an object is serialized, which method will be called, automatically,providing your object with an opportunity to close any resources orotherwise prepare to be serialized?',
        type: 2,
        category: 2,
        answer: {
            options: ['__destroy()', '__serialize()', '__destruct()', '__shutdown()', '__sleep()'],
            correct: [5],
            link: ["http://php.net/manual/en/function.serialize.php"],
            explanation: ["When serializing objects, PHP will attempt to call the function __sleep() prior to serialization."]
        }
    },
    q32: {
        id: 32,
        text: 'What is the output of the following code?\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\nclass MyException extends Exception {}\nclass AnotherException extends MyException {}\nclass Foo { \n\tpublic function something() { \n\t\tthrow new AnotherException(); \n\t} \n\n\tpublic function somethingElse() { \n\t\tthrow new MyException(); \n\t}\n}\n\n$a = new Foo();\ntry { \n\ttry { \n\t\t$a-&gt;something(); \n\t} catch(AnotherException $e) { \n\t\t$a-&gt;somethingElse(); \n\t} catch(MyException $e) { \n\t\tprint "Caught Exception"; \n\t}\n} catch(Exception $e) { \n\tprint "Didn\'t catch the Exception!";\n}\n?&gt;\n</pre>',
        type: 2,
        category: 0,
        answer: {
            options: ['"Caught Exception" followed by "Didn\'t catch the Exception!"', 'A fatal error for an uncaught exception', '"Didn\'t catch the Exception!"', '"Didn\'t catch the Exception!" followed by a fatal error', '"Caught Exception"'],
            correct: [3],
            link: ["http://php.net/manual/en/language.exceptions.php", "http://stackoverflow.com/questions/2586608/confused-by-this-php-exception-try-catch-nesting"],
            explanation: ["The second catch (the one who looks for MyException) will never catch the exception because it'll bubble to the outer try/catch."]
        }
    },
    q33: {
        id: 33,
        text: 'Which two internal PHP interfaces provide functionality which allow you to treat an object like an array?',
        type: 3,
        category: 8,
        answer: {
            options: ['iteration', 'arrayaccess', 'objectarray', 'iterator', 'array'],
            correct: [2, 4],
            link: ["http://php.net/manual/en/class.arrayaccess.php", "http://php.net/manual/en/class.iterator.php"],
            explanation: []
        }
    },
    q34: {
        id: 34,
        text: 'Which <code>php.ini</code> directive should be disabled to prevent the execution of a remote PHP script via an <code>include</code> or <code>require</code> construct?',
        type: 2,
        category: 3,
        answer: {
            options: ['You cannot disable remote PHP script execution', 'curl.enabled', 'allow_remote_url', 'allow_url_fopen', 'allow_require'],
            correct: [4],
            link: ["http://www.php.net/manual/en/filesystem.configuration.php#ini.allow-url-fopen"],
            explanation: ["allow_url_include would be a better answer, but it needs allow_url_fopen to work"]
        }
    },
    q35: {
        id: 35,
        text: 'When attempting to prevent a cross-site scripting attack, which of the following is most important?',
        type: 2,
        category: 3,
        answer: {
            options: ['Not writing Javascript on the fly using PHP', 'Filtering Output used in form data', 'Filtering Output used in database transactions', 'Writing careful Javascript', 'Filtering all input'],
            correct: [5],
            link: [],
            explanation: ["The 2nd option might seem the right choice, but output should be escaped not filtered."]
        }
    },
    q36: {
        id: 36,
        text: 'Which of the following <code>php.ini</code> directives should be disabled to improve the outward security of your application?',
        type: 3,
        category: 3,
        answer: {
            options: ['safe_mode', 'magic_quotes_gpc', 'register_globals', 'display_errors', 'allow_url_fopen'],
            correct: [2, 3, 4, 5],
            link: ["http://php.net/manual/en/features.safe-mode.php", "http://www.php.net/manual/en/security.magicquotes.php"],
            explanation: ["magic_quotes_gpc should be disabled to ensure proper using of native database escape string functions."]
        }
    },
    q37: {
        id: 37,
        text: 'Which of the following list of potential data sources should be considered trusted?',
        type: 2,
        category: 3,
        answer: {
            options: ['None of the above', '$_ENV', '$_GET', '$_COOKIE', '$_SERVER'],
            correct: [1],
            link: [],
            explanation: ["Only trusted superglobal should be $_SESSION. \n$_SERVER contains user input (GET / POST parameters, PHP_SELF and headers) which can be manipulated by the client."]
        }
    },
    q38: {
        id: 38,
        text: 'What is the best way to ensure the distinction between filtered / trusted and unfiltered / untrusted data?',
        type: 2,
        category: 3,
        answer: {
            options: ['None of the above', 'Never trust any data from the user', 'Enable built-in security features such as magic_quotes_gpc and safe_mode', 'Always filter all incoming data', 'Use PHP 5\'s tainted mode'],
            correct: [4],
            link: ["http://devzone.zend.com/article/1113"],
            explanation: []
        }
    },
    q39: {
        id: 39,
        text: 'Consider the following code:\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\nsession_start();\n\nif(!empty($_REQUEST[\'id\']) &amp;&amp; !empty($_REQUEST[\'quantity\'])) { \n\t$id = scrub_id($_REQUEST[\'id\']); \n\t$quantity = scrub_quantity($_REQUEST[\'quantity\']); \n\t$_SESSION[\'cart\'][] = array(\'id\' =&gt; $id, \'quantity\' =&gt; $quantity);\n}\n\n/* .... */\n?&gt;\n</pre>\n\nWhat potential security hole would this code snippet produce?',
        type: 2,
        category: 3,
        answer: {
            options: ['Cross-Site Scripting Attack', 'There is no security hole in this code', 'Code Injection', 'SQL Injection', 'Cross-Site Request Forgery'],
            correct: [5],
            link: ["http://en.wikipedia.org/wiki/Cross-site_request_forgery"],
            explanation: ["Getting the id and quantity by $_REQUEST would allow to pass this parameters by GET or POST. \nAlso, there isn't a 'token' parameter specified to prevent XSRF attacks. If someone manages to get the session id of another user (we can see that the session id is not renewed in this code), the lack of a token means he could manipulate that users cart."]
        }
    },
    q40: {
        id: 40,
        text: 'What is the best measure one can take to prevent a cross-site request forgery?',
        type: 2,
        category: 3,
        answer: {
            options: ['Disallow requests from outside hosts', 'Add a secret token to all form submissions', 'Turn off allow_url_fopen in php.ini', 'Filter all output', 'Filter all input'],
            correct: [2],
            link: ["http://en.wikipedia.org/wiki/Cross-site_request_forgery#Prevention", "http://shiflett.org/articles/cross-site-request-forgeries"],
            explanation: []
        }
    },
    q41: {
        id: 41,
        text: 'Consider the following code:\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\nheader("Location: {$_GET[\'url\']}");\n?&gt;\n</pre>\n\nWhich of the following values of $_GET[\'url\'] would cause session fixation?',
        type: 2,
        category: 3,
        answer: {
            options: ['Session Fixation is not possible with this code snippet', 'http://www.zend.com/?PHPSESSID=123', 'PHPSESSID%611243', 'Set-Cookie%3A+PHPSESSID%611234', 'http%3A%2F%2Fwww.zend.com%2F%0D%0ASet-Cookie%3A+PHPSESSID%611234'],
            correct: [2],
            link: ["http://www.php.net/manual/en/session.idpassing.php", "https://www.owasp.org/index.php/Session_fixation"],
            explanation: ["This will be only possible if session.use_only_cookies or session.use_cookies are NOT enabled in the php.ini, as we are not told otherwise we have to assume a worst case scenario."]
        }
    },
    q42: {
        id: 42,
        text: 'When implementing a permissions system for your Web site, what should always be done with regards to the session?',
        type: 2,
        category: 3,
        answer: {
            options: ['None of the above', 'You should not implement permission systems using sessions', 'Sessions should be cleared of all data and re-populated', 'The session key should be regenerated', 'The session should be destroyed'],
            correct: [4],
            link: ["http://www.php.net/manual/en/function.session-regenerate-id.php", "http://shiflett.org/articles/session-fixation"],
            explanation: ["Always regenerate the session identifier on the receiving script, regardless of the user's state."]
        }
    },
    q43: {
        id: 43,
        text: 'Which of the following is not valid syntax for creating a new array key?',
        type: 2,
        category: 8,
        answer: {
            options: ['$a[] = "value";', '$a{} = "value";', '$a[0] = "value";', '$a{0} = "value";', '$a[$b = 0] = "value";'],
            correct: [2],
            link: ["http://php.net/manual/en/language.types.array.php"],
            explanation: ["Square brackets can be used to access array elements and to add a new element to the end of the array. Curly braces can be used to access array elements."]
        }
    },
    q44: {
        id: 44,
        text: 'Which of the following functions will sort an array in ascending order by value, while preserving key associations?',
        type: 2,
        category: 8,
        answer: {
            options: ['asort()', 'usort()', 'krsort()', 'ksort()', 'sort()'],
            correct: [1],
            link: ["http://www.php.net/manual/en/function.asort.php"],
            explanation: ["asort() will sort the array [by value] in ascending order preserving key associations. \nsort() will sort the array in ascending order but will lose key associations. \nksort() and krsort() will sort the array by keys (not values) in ascending and descending order respectively. \nusort() will sort an array by its values using a user-supplied comparison function (but losing keys associations)."]
        }
    },
    q45: {
        id: 45,
        text: 'What is the output of the following code block?\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\n$a = "The quick brown fox jumped over the lazy dog.";\n$b = array_map("strtoupper", explode(" ", $a));\n\nforeach($b as $value) {\n\tprint "$value ";\n}\n?&gt;\n</pre>',
        type: 2,
        category: 8,
        answer: {
            options: ['THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG.', 'A PHP Error', 'Array Array Array Array Array Array Array Array Array'],
            correct: [1],
            link: ["http://php.net/manual/en/function.array-map.php"],
            explanation: []
        }
    },
    q46: {
        id: 46,
        text: 'Which from the following list is not an approrpiate use of an array?',
        type: 2,
        category: 8,
        answer: {
            options: ['As a list', 'All of these uses are valid', 'As a Lookup Table', 'A Stack', 'As a hash table'],
            correct: [2],
            link: ["http://php.net/manual/en/language.types.array.php"],
            explanation: ["As a list: correct, using only values. \nAs a Look Up Table: correct, using keys and values. \nAs a stack: correct, using array_shift() and array_pop(). \nAs a hash table: correct, using keys and values."]
        }
    },
    q47: {
        id: 47,
        text: 'What is the output of this code snippet?\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\n$a = array(0.001 =&gt; \'b\', .1 =&gt; \'c\');\nprint_r($a);\n?&gt;\n</pre>',
        type: 2,
        category: 8,
        answer: {
            options: ['An empty array', '0.001 =&gt; \'b\', .1 =&gt; c', '0 =&gt; \'c\'', '\'0.001\' =&gt; \'b\', \'0.1\' =&gt; c\'', 'A Syntax Error'],
            correct: [3],
            link: ["http://php.net/manual/en/language.types.array.php"],
            explanation: ["Array keys can not be floats: 0.001 gets interpoled to 0, and .1 also gets interpoled to 0, overwriting the first key."]
        }
    },
    q48: {
        id: 48,
        text: 'Which of the following functions could be used to break a string into an array?',
        type: 3,
        category: 6,
        answer: {
            options: ['array_split()', 'preg_split()', 'string_split()', 'preg_match_all()', 'explode()'],
            correct: [2, 4, 5],
            link: ["http://www.php.net/manual/en/function.split.php", "http://www.php.net/manual/en/function.preg-match-all.php", "http://www.php.net/manual/en/function.explode.php"],
            explanation: ["PHP 5.3 certification: string_split() and array_split() doesn't exist as functions."]
        }
    },
    q49: {
        id: 49,
        text: 'If you wanted a variable containing the letters <code>A</code> through <code>Z</code>, that allowed you to access each letter independently, which of the following approaches could you use?',
        type: 3,
        category: 6,
        answer: {
            options: ['$s = str_split("ABCDEFGHIJKLMNOPQRSTUVWXYZ");', '$s = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";', '$s = range(\'A\', \'Z\');', '$s = explode("", "ABCDEFGHIJKLMNOPQRSTUVWXYZ");', 'You would use the ALPHA_ARRAY constant', 'None of the above'],
            correct: [1, 2, 3],
            link: ["http://www.php.net/manual/en/function.range.php", "http://www.php.net/manual/en/function.explode.php"],
            explanation: ["explode() does not accept an empty string as delimiter and ALPHA_ARRAY constant does not exist as of PHP 5.3"]
        }
    },
    q50: {
        id: 50,
        text: 'What is the output of the following code block?\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\n$array = array(1 =&gt; 0, 2, 3, 4);\narray_splice($array, 3, count($array), array_merge(array(\'x\'), array_slice($array, 3))); \nprint_r($array);\n?&gt;\n</pre>',
        type: 2,
        category: 8,
        answer: {
            options: ['1 =&gt; 1, 2 =&gt; 2, 3 =&gt; x, 4=&gt; 4', '0 =&gt; 1, 2 =&gt; 2, 3 =&gt; 3, 4 =&gt; 4, x =&gt; 3', '0 =&gt; 0, 1=&gt; 2, 2 =&gt; 3, 3 =&gt; x, 4 =&gt; 4', '0 =&gt; x, 1 =&gt; 0, 2 =&gt; 1, 3=&gt; 2, 4=&gt;3', '1 =&gt; 1, 3 =&gt; x, 2 =&gt; 2, 4 =&gt; 4'],
            correct: [3],
            link: ["http://www.php.net/manual/en/function.array-slice.php", "http://www.php.net/manual/en/function.array-merge.php", "http://www.php.net/manual/en/function.array-splice.php"],
            explanation: ["The trick to understand this question is knowing that array_splice doesn't preserve keys."]
        }
    },
    q51: {
        id: 51,
        text: 'Which function would you use to add an element to the beginning of an array?',
        type: 2,
        category: 8,
        answer: {
            options: ['array_shift()', 'array_push();', '$array[0] = "value";', 'array_unshift()', 'array_pop();'],
            correct: [4],
            link: ["http://www.php.net/manual/en/function.array-unshift.php"],
            explanation: []
        }
    },
    q52: {
        id: 52,
        text: 'Which key will not be displayed from the following code block?\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\n$array = array(\n\t\'a\' =&gt; \'John\', \n\t\'b\' =&gt; \'Coggeshall\', \n\t\'c\' =&gt; array(\n\t\t\'d\' =&gt; \'John\', \n\t\t\'e\' =&gt; \'Smith\'\n\t)\n); \n\nfunction display($item, $key) {\n\tprint "$key =&gt; $item";\n}\n\narray_walk_recursive($array, "display");\n?&gt;\n</pre>',
        type: 2,
        category: 8,
        answer: {
            options: ['d', 'c', 'b', 'a', 'They all will be displayed'],
            correct: [2],
            link: ["http://www.php.net/manual/en/function.array-walk-recursive.php"],
            explanation: ["As stated in the manual: \"Any key that holds an array will not be passed to the function\"."]
        }
    },
    q53: {
        id: 53,
        text: 'What is the result of the following code snippet?\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\n$array = array(\n\t\'a\' =&gt; \'John\', \n\t\'b\' =&gt; \'Coggeshall\', \n\t\'c\' =&gt; array(\n\t\t\'d\' =&gt; \'John\', \n\t\t\'e\' =&gt; \'Smith\'\n\t)\n); \n\nfunction something($array) {\n\textract($array);\n\treturn $c[\'e\'];\n}\n\nprint something($array);\n?&gt;\n</pre>',
        type: 2,
        category: 8,
        answer: {
            options: ['Smith', 'A PHP Warning', 'Coggeshall', 'NULL', 'Array'],
            correct: [1],
            link: ["http://www.php.net/manual/en/function.extract.php"],
            explanation: []
        }
    },
    q54: {
        id: 54,
        text: 'What should go in the missing line <code>?????</code> below to produce the output shown?\n\n<pre class="brush: php">\n&lt;?php\n$array_one = array(1,2,3,4,5);\n$array_two = array(\'A\', \'B\', \'C\', \'D\', \'E\');\n\n???????\n\nprint_r($array_three);\n?&gt;\n</pre>\n\nResult\n\n<pre class=\'brush: php; html-script: true\'>\nArray( \n\t[5] =&gt; A \n\t[4] =&gt; B \n\t[3] =&gt; C \n\t[2] =&gt; D \n\t[1] =&gt; E\n)\n</pre>',
        type: 2,
        category: 8,
        answer: {
            options: ['$array_three = array_merge(array_reverse($array_one), $array_two);', '$array_three = array_combine($array_one, $array_two);', '$array_three = array_combine(array_reverse($array_one), $array_two);', '$array_three = array_merge($array_one, $array_two);', '$array_three = array_reverse($array_one) + $array_two;'],
            correct: [3],
            link: ["http://www.php.net/manual/en/function.array-combine.php", "http://www.php.net/manual/en/function.array-reverse.php"],
            explanation: []
        }
    },
    q55: {
        id: 55,
        text: 'Which of the following functions are used with the internal array pointer to accomplish an action?',
        type: 3,
        category: 8,
        answer: {
            options: ['key', 'forward', 'prev', 'current', 'next'],
            correct: [1, 3, 4, 5],
            link: ["http://php.net/manual/en/function.prev.php", "http://php.net/manual/en/function.current.php", "http://php.net/manual/en/function.next.php"],
            explanation: ["The forward function does not exist as of PHP 5.3"]
        }
    },
    q56: {
        id: 56,
        text: 'Given the following array:\n\n<pre class="brush: php">\n&lt;?php\n$array = array(1,1,2,3,4,4,5,6,6,6,6,3,2,2,2);\n?&gt;\n</pre>\n\nThe fastest way to determine the total number a particular value appears in the array is to use which function?',
        type: 2,
        category: 8,
        answer: {
            options: ['array_total_values', 'array_count_values', 'A foreach loop', 'count', 'a for loop'],
            correct: [2],
            link: ["http://www.php.net/manual/en/function.array-count-values.php"],
            explanation: []
        }
    },
    q57: {
        id: 57,
        text: 'The ____ construct is particularly useful to assign your own variable names to values within an array.',
        type: 2,
        category: 8,
        answer: {
            options: ['array_get_variables', 'current', 'each', 'import_variables', 'list'],
            correct: [5],
            link: ["http://www.php.net/manual/en/function.list.php"],
            explanation: []
        }
    },
    q58: {
        id: 58,
        text: 'The following code snippet displays what for the resultant array?\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\n$a = array(1 =&gt; 0, 3 =&gt; 2, 4 =&gt; 6);\n$b = array(3 =&gt; 1, 4 =&gt; 3, 6 =&gt; 4);\nprint_r(array_intersect($a, $b));\n?&gt;\n</pre>',
        type: 2,
        category: 8,
        answer: {
            options: ['1 =&gt; 0', '1 =&gt; 3, 3 =&gt; 1, 4 =&gt; 3', '3 =&gt; 1, 3=&gt; 2, 4 =&gt; 3, 4=&gt; 6', '1 =&gt; 0, 3 =&gt; 2, 4 =&gt; 6', 'An empty Array'],
            correct: [5],
            link: ["http://www.php.net/manual/en/function.array-intersect.php"],
            explanation: ["There ara no coincidences by value, so it'll print an empty array."]
        }
    },
    q59: {
        id: 59,
        text: 'Which of the following are not valid ways to embed a variable into a string?',
        type: 3,
        category: 6,
        answer: {
            options: ['$a = "Value: $value-&gt;getValue()";', '$a = "Value: {$value}";', '$a = \'Value: $value\';', '$a = "Value: $value";', '$a = "Value: {$value[\'val\']}";'],
            correct: [1, 3],
            link: ["http://www.php.net/manual/en/language.types.string.php#language.types.string.syntax.double"],
            explanation: ["The 1st option needs curly braces, the 3rd one uses single quotes and as such the variable will not be interpolated."]
        }
    },
    q60: {
        id: 60,
        text: 'What would go in the spots indcated by <code>?????</code> in the code segment below for the script to work?\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\n$msg = "The Quick Brown Foxed Jumped Over the Lazy Dog";\n$state = true;\n$retval = "";\n\nfor($i = 0; (isset(??????)); $i++) {\n\tif($state) {\n\t\t$retval .= strtolower(?????);\n\t} \n\telse {\n\t\t$retval .= strtoupper(?????);\n\t}\n\n\t$state = !$state;\n}\n\nprint $retval;\n?&gt;\n</pre>',
        type: 2,
        category: 6,
        answer: {
            options: ['$msg{$i}', 'ord($msg);', 'chr($msg);', 'substr($msg, $i, 2);'],
            correct: [1],
            link: ["http://www.php.net/manual/en/function.isset.php"],
            explanation: ["Fastest way to resolve this question is to see that there is a <code>?????</code> inside an isset() function. The isset() method only accepts variables."]
        }
    },
    q61: {
        id: 61,
        text: 'Given the two values below, which of the following possiblities will print <code>10 foos20 bars</code>?\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\n$var1 = "10 foos";\n$var2 = "20 bars";\nprint ???????;\n?&gt;\n</pre>',
        type: 3,
        category: 6,
        answer: {
            options: ['None of the above', 'implode("", array($var1,$var2));', '$var1 . $var2', '$var1 + $var2', 'All of the above'],
            correct: [2, 3],
            link: ["http://php.net/manual/en/language.operators.string.php", "http://www.php.net/manual/en/function.implode.php"],
            explanation: []
        }
    },
    q62: {
        id: 62,
        text: 'Given the string: <code>$var = "james@test.com";</code> Which of the following will extract the TLD (".com") from the string?',
        type: 2,
        category: 6,
        answer: {
            options: ['strstr($var, strpos($var, "."));', 'substr($var, strpos($var, "@"));', 'substr($var, strstr($var, "."));', 'substr($var, strpos($var, ".") + 1);', 'substr($var, strpos($var, "."));'],
            correct: [5],
            link: ["http://www.php.net/manual/en/function.substr.php", "http://www.php.net/manual/en/function.strpos.php"],
            explanation: []
        }
    },
    q63: {
        id: 63,
        text: 'When comparing two strings, which of the following is acceptable?',
        type: 3,
        category: 6,
        answer: {
            options: ['$a === $b;', 'strcasecmp($a, $b);', 'strcmp($a, $b);', '$a == $b;', 'str_compare($a,$b);'],
            correct: [1, 2, 3, 4],
            link: ["http://www.php.net/manual/en/function.strcasecmp.php", "http://www.php.net/manual/en/function.strcmp.php"],
            explanation: ["str_compare() does not exist as of PHP 5.3"]
        }
    },
    q64: {
        id: 64,
        text: 'A fingerprint of a string can be determined using which of the following?',
        type: 2,
        category: 6,
        answer: {
            options: ['md5()', 'str_hash()', 'fingerprint()', 'None of the above'],
            correct: [1],
            link: ["http://www.php.net/manual/en/function.md5.php"],
            explanation: []
        }
    },
    q65: {
        id: 65,
        text: 'Which of the following is the best way to split a string on the "-=-" pattern?',
        type: 2,
        category: 6,
        answer: {
            options: ['They all are equally proper methods', 'str_split($string, strpos($string, "-=-"))', 'preg_split("-=-", $string);', 'explode("-=-" $string);'],
            correct: [3],
            link: ["http://www.php.net/manual/en/function.str-split.php", "http://www.php.net/manual/en/function.preg-split.php", "http://www.php.net/manual/en/function.explode.php"],
            explanation: ["The trick in this question is the pattern. \"-=-\" is a valid pattern splitting a string using \"=\" as the delimiter (\"-\" is the regex pattern delimiter). \nExplode is missing a comma."]
        }
    },
    q66: {
        id: 66,
        text: 'What is the output of the following code?\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\n$string = "14302"; \n$string[$string[2]] = "4"; \nprint $string; \n?&gt;\n</pre>',
        type: 2,
        category: 6,
        answer: {
            options: ['14304', '14342', '44302', '14402', 'Array'],
            correct: [2],
            link: [],
            explanation: []
        }
    },
    q67: {
        id: 67,
        text: 'Which of the following comparisons will evaluate to <code>true</code>?',
        type: 3,
        category: 6,
        answer: {
            options: ['\'t\' == t', '1 === "1time"', '"top" == 0', '"top" === 0', '1 == "1time"'],
            correct: [1, 3, 5],
            link: ["http://www.php.net/manual/en/language.types.type-juggling.php"],
            explanation: ["The most surprising case is the 1st option. PHP will throw a notice an assume t as an undefined constant, then it will proceed to instantiate it as a constant with the value 't'. \nThe other cases are type-juggling comparisons between integers and strings."]
        }
    },
    q68: {
        id: 68,
        text: 'Which function is best suited for removing markup tags from a string?',
        type: 2,
        category: 6,
        answer: {
            options: ['strip_markup', 'strip_tags', 'str_replace', 'preg_replace', 'preg_strip'],
            correct: [2],
            link: ["http://php.net/manual/en/function.strip-tags.php"],
            explanation: []
        }
    },
    q69: {
        id: 69,
        text: 'Identify the best approach to compare to variables in a binary-safe fashion',
        type: 2,
        category: 6,
        answer: {
            options: ['Both strcmp() and $a === $b', '$a == $b', '$a === $b', 'str_compare()', 'strstr()'],
            correct: [1],
            link: ["http://www.php.net/manual/en/function.strcmp.php", "http://php.net/manual/en/language.operators.comparison.php"],
            explanation: []
        }
    },
    q70: {
        id: 70,
        text: 'Consider the following script:\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\n$oranges = 10;\n$apples = 5;\n\n$string = "I have %d apples and %d oranges";\n\n????????\n&gt;\n</pre>\n\nWhat could be placed in place of <code>??????</code> to output the string: <code>I have 5 apples and 10 oranges</code>',
        type: 3,
        category: 6,
        answer: {
            options: ['str_format($string, $apples, $oranges);', ' ($string, $apples, $oranges);', 'printf($string, $apples, $oranges);', 'print sprintf($apples, $oranges);', 'sprintf($string, $oranges, $apples);'],
            correct: [3],
            link: ["http://www.php.net/manual/en/function.sprintf.php"],
            explanation: []
        }
    },
    q71: {
        id: 71,
        text: 'Consider the following script:\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\n$string = "&lt;b&gt;I like \'PHP\' &amp; I think it is \"cool\"&lt;/b&gt;";\n\nvar_dump(htmlentities($string, ENT_QUOTES));\nvar_dump(print htmlspecialchars($string));\n?&gt;\n</pre>\n\nIn this script, do the two <code>var_dump()</code> calls produce the same string? Why or Why Not?',
        type: 2,
        category: 6,
        answer: {
            options: ['No, the htmlentities() call will translate quotes while the htmlspecialchars() call will not', 'No, htmlentites() translates &lt; and &gt; symbols to their HTML entity equivalents while htmlspecialchars() only does quotes', 'No, the htmlentites() call won\'t translate quotes to HTML entities while the htmlspecialchars() call will', 'No, the resulting strings will be completely different', 'Yes, htmlspecialchars() and htmlentities() with the ENT_QUOTES constants produce the same result'],
            correct: [4],
            link: ["http://www.php.net/manual/en/function.htmlentities.php", "http://www.php.net/manual/en/function.htmlspecialchars.php"],
            explanation: ["This is another tricky question. The second var_dump have a \"print\" in front of htmlspecialchars, so it will only dump the returning integer."]
        }
    },
    q72: {
        id: 72,
        text: 'Consider the following String:\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\n$string = "John\tMarkTed\tLarry";\n?&gt;\n</pre>Which of the following functions would best parse the string above by the tab (\t) and newline () characters?',
        type: 2,
        category: 6,
        answer: {
            options: ['strsplit($string, "\t");', 'strtok($string, "\t");', 'strstr($string, "\t");', 'explode("\t", $string);', 'All of the above'],
            correct: [2],
            link: ["http://www.php.net/manual/en/function.strtok.php"],
            explanation: ["strtok(), even if it will need various iterations."]
        }
    },
    q73: {
        id: 73,
        text: 'Which functions would be needed to translate the following string:\n\n<pre class=\'brush: php; html-script: true\'>\nI love PHP 5\n</pre>\nto the following?\n<pre class=\'brush: php; html-script: true\'>\n5 PHP EVOL I\n</pre>\n',
        type: 3,
        category: 6,
        answer: {
            options: ['mirror()', 'strtoupper()', 'toupper()', 'str_reverse()', 'strrev()'],
            correct: [2, 5],
            link: ["http://www.php.net/manual/en/function.strtoupper.php", "http://www.php.net/manual/en/function.strrev.php"],
            explanation: []
        }
    },
    q74: {
        id: 74,
        text: 'What is the best approach for converting this string:\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\n$string = "a=10&amp;b[]=20&amp;c=30&amp;d=40+50";\n?&gt;\n</pre>\nInto this array?\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\narray(4) { \n\t["a"]=&gt; string(2) "10" \n\t["b"]=&gt; array(1) { \n\t\t[0]=&gt; string(2) "20" \n\t} \n\t["c"]=&gt; string(2) "30" \n\t["d"]=&gt; string(5) "40 50"\n}\n?&gt;\n</pre>',
        type: 2,
        category: 6,
        answer: {
            options: ['Write a parser completely by hand, it\'s the only way to make sure it\'s 100% accurate', 'Use the parse_str() function to translate it to an array()', 'Pass the variable to another PHP script via an HTTP GET request and return the array as a serialized variable', 'Just call unserialize() to translate it to an array()', 'Write a string parser using strtok() and unserialize() to convert it to an array'],
            correct: [2],
            link: ["http://www.php.net/manual/en/function.parse-str.php"],
            explanation: []
        }
    },
    q75: {
        id: 75,
        text: 'Which string does the following PCRE regular expression match?\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\n$regex = "/^([a-z]{5})[1-5]+([a-z]+)/";\n?&gt;\n</pre>',
        type: 3,
        category: 6,
        answer: {
            options: ['None of the above', 'Hello34262343goodbye', 'frank12345abc', 'hello34212343goodbye', 'abcdefghi12345abc'],
            correct: [3, 4],
            link: ["http://en.wikipedia.org/wiki/Regular_expression"],
            explanation: []
        }
    },
    q76: {
        id: 76,
        text: 'Which PCRE regular expression will match the string <code>PhP5-rocks</code>?',
        type: 2,
        category: 6,
        answer: {
            options: ['/^[hp1-5]*\\-.*/i', '/[hp1-5]*\\-.?/', '/[hp][1-5]*\\-.*/', '/[PhP]{3}[1-5]{2,3}\\-.*$/', '/[a-z1-5\\-]*/'],
            correct: [1],
            link: ["http://www.phpro.org/tutorials/Introduction-to-PHP-Regex.html#8"],
            explanation: ["The \"i\" modifier at the end makes the pattern case-insensitive."]
        }
    },
    q77: {
        id: 77,
        text: 'If regular expressions must be used, in general which type of regular expression functions available to PHP is preferred for performance reasons?',
        type: 2,
        category: 6,
        answer: {
            options: ['strtok() using regular expressions', 'preg_* regular expression functions', 'parse_str() using regular expressions', 'strregex* regular expression functions', 'ereg* regular expression functions'],
            correct: [2],
            link: ["http://www.php.net/manual/en/function.ereg.php"],
            explanation: []
        }
    },
    q78: {
        id: 78,
        text: 'To destroy one variable within a PHP session you should use which method in PHP 5?',
        type: 2,
        category: 1,
        answer: {
            options: ['Unset the variable in $HTTP_SESSION_VARS', 'Use the session_destroy() function', 'Use the session_unset() function', 'unset the variable in $_SESSION using unset()', 'Any of the above are acceptable in PHP 5'],
            correct: [4],
            link: ["http://docs.php.net/manual/en/session.examples.basic.php"],
            explanation: ["session_unset() does unset all session variables, session_destroy() destroys all session data, to unset a specific variable in $_SESSION, we should use unset()."]
        }
    },
    q79: {
        id: 79,
        text: 'If you would like to store your session in the database, you would do which of the following?',
        type: 2,
        category: 1,
        answer: {
            options: ['It requires a custom PHP extension to change the session handler', 'Implement the session_set_save_handler() function', 'Create functions for each session handling step and use session_set_save_handler() to override PHP\'s internal settings', 'Configure the session.save_handler INI directive to your session class'],
            correct: [3],
            link: ["http://www.php.net/manual/en/function.session-set-save-handler.php"],
            explanation: ["The 2nd option isn't wrong in a strict sense of the word, but 3rd is a more complete answers (check the manual)."]
        }
    },
    q80: {
        id: 80,
        text: 'To destroy a PHP session completely, one must which of the following?',
        type: 3,
        category: 1,
        answer: {
            options: ['Regenerate the session ID using session_regenerate_id()', 'If cookies are used, destroy it', 'Use session_demolish() to completely destroy the session', 'Change the session name using session_name()', 'Destroy the session data using session_destroy()'],
            correct: [2, 5],
            link: ["http://www.php.net/manual/en/function.session-destroy.php"],
            explanation: []
        }
    },
    q81: {
        id: 81,
        text: 'If you would like to change the session ID generation function, which of the following is the best approach for PHP 5?',
        type: 2,
        category: 1,
        answer: {
            options: ['Set the session.hash_function INI configuration directive', 'Use the session_set_id_generator() function', 'Set the session id by force using the session_id() function', 'Use the session_regenerate_id() function', 'Implement a custom session handler'],
            correct: [1],
            link: ["http://www.php.net/manual/en/session.configuration.php#ini.session.hash-function"],
            explanation: ["Read the question carefully, it is not asking which function to call to change/set the session_id. \nIt's asking how to change the function that generates the session_id."]
        }
    },
    q82: {
        id: 82,
        text: 'Consider the following HTML fragement:\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;select name="?????" multiple&gt;\n\t&lt;option value="1"&gt;Item #1&lt;/option&gt;\n\t&lt;!-- ... more options ... --&gt;\n&lt;/select&gt;\n</pre>\n\nWhich of the following <code>name</code> attributes should be used to capture all of the data from the user in PHP?',
        type: 2,
        category: 1,
        answer: {
            options: ['myselectbox=array()', 'myselectbox[]', 'myselectbox[\'multiple\']', 'myselectbox{\'multiple\'}', 'myselectbox'],
            correct: [2],
            link: ["http://onlamp.com/pub/a/php/2004/08/26/PHPformhandling.html", "http://onlinetools.org/tricks/using_multiple_select.php"],
            explanation: []
        }
    },
    q83: {
        id: 83,
        text: 'When uploading a file using HTTP, which variable can be used to locate the file on PHP\'s local filesystem?',
        type: 2,
        category: 1,
        answer: {
            options: ['None of the above', '$_FILES[\'fieldname\'][\'tmp_name\']', '$_FILES[\'fieldname\']', '$_FILES[\'fieldname\'][0][\'filename\']', '$_FILES[\'fieldname\'][\'filename\']'],
            correct: [2],
            link: ["http://www.php.net/manual/en/features.file-upload.post-method.php"],
            explanation: []
        }
    },
    q84: {
        id: 84,
        text: 'To force a user to redirect to a new URL from within a PHP 5 script, which of the following should be used?',
        type: 2,
        category: 1,
        answer: {
            options: ['Send a HTTP "Location:" header', 'Use the HTML &lt;redirect&gt; Tag', 'Send a HTTP "Forward:" header', 'Use the redirect() function'],
            correct: [1],
            link: ["http://php.net/manual/en/function.header.php"],
            explanation: []
        }
    },
    q85: {
        id: 85,
        text: 'Setting a cookie on the client in PHP 5 can be best accomplished by:',
        type: 2,
        category: 1,
        answer: {
            options: ['Use the add_cookie() function', 'Use the setcookie() function', 'Use the the apache_send_header() function', 'Setting a variable in the $_COOKIE superglobal'],
            correct: [2],
            link: ["http://www.php.net/manual/en/function.setcookie.php"],
            explanation: []
        }
    },
    q86: {
        id: 86,
        text: 'How does one create a cookie which will exist only until the browser session is terminated?',
        type: 2,
        category: 1,
        answer: {
            options: ['You cannot create cookies that expire when the browser session is terminated', 'Setting the expiration time for a cookie to a time in the distant future', 'Do not provide a cookie expiration time', 'Enable Cookie Security', 'Set a cookie without a domain'],
            correct: [3],
            link: ["http://php.net/manual/en/function.setcookie.php"],
            explanation: []
        }
    },
    q87: {
        id: 87,
        text: 'Setting a HTTP cookie on the client which is not URL-encoded is done how in PHP 5?',
        type: 2,
        category: 1,
        answer: {
            options: ['Use the setrawcookie() function', 'Set the cookies.urlencode INI directive to false', 'Use urldecode() on the return value of setcookie()', 'Setting the $no_encode parameter of setcookie() to a boolean \'true\'', 'All cookies must be URL encoded'],
            correct: [1],
            link: ["http://www.php.net/manual/en/function.setrawcookie.php"],
            explanation: ["According to the manual: \"setrawcookie — Send a cookie without urlencoding the cookie value \""]
        }
    },
    q88: {
        id: 88,
        text: 'During an HTTP authentication, how does one determine the username and password provided by the browser?',
        type: 2,
        category: 1,
        answer: {
            options: ['Parse the HTTP headers manually using http_get_headers()', 'Use the get_http_username() and get_http_password() functions', 'Use the $_SERVER[\'HTTP_USER\'] and $_SERVER[\'HTTP_PASSWORD\'] variables', 'Use the $_SERVER[\'PHP_AUTH_USER\'] and $_SERVER[\'PHP_AUTH_PW\'] variables', 'Parse the $_SERVER[\'REQUEST_URI\'] variable'],
            correct: [4],
            link: ["http://php.net/manual/en/features.http-auth.php"],
            explanation: []
        }
    },
    q89: {
        id: 89,
        text: 'Consider the following function:\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\nfunction redirect($url) { \n\t// Check to make sure we haven\'t already sent \n\t// the header: \n\tif(???????) { \n\t\theader("Location: $url"); \n\t}\n}\n?&gt;\n</pre> What conditional should replace the <code>?????</code> above?',
        type: 2,
        category: 1,
        answer: {
            options: ['!in_array("Location: $url", headers_list())', '!header_exists("Location: $url")', '!header_location($url)', '$_SERVER[\'HTTP_LOCATION\'] != $url'],
            correct: [1],
            link: ["http://www.php.net/manual/en/function.headers-list.php"],
            explanation: ["According to the manual: headers_list — Returns a list of response headers sent (or ready to send)"]
        }
    },
    q90: {
        id: 90,
        text: 'One can ensure that headers can always be sent from a PHP script by doing what?',
        type: 2,
        category: 1,
        answer: {
            options: ['Enable header buffering in PHP 5', 'Set the header.force INI directive to true', 'Enable output buffering in PHP 5', 'There is no way to ensure that headers can always be set, they must always be checked', 'None of the above'],
            correct: [3],
            link: ["http://php.net/manual/en/function.ob-start.php", "http://php.net/manual/en/function.header.php"],
            explanation: ["While output buffering is active no output is sent from the script (other than headers), instead the output is stored in an internal buffer."]
        }
    },
    q91: {
        id: 91,
        text: 'When is it acceptable to store sensitive information in an HTTP cookie?',
        type: 2,
        category: 3,
        answer: {
            options: ['Only under extremely controlled situations', 'When the cookie is sent over a secure HTTP request', 'When it is encrypted', 'It is always acceptable'],
            correct: [3],
            link: ["http://php.net/manual/en/function.setcookie.php"],
            explanation: ["The best option (besides never storing sensitive information in a cookie) is number 3"]
        }
    },
    q92: {
        id: 92,
        text: 'Removing undesired markup tags from input can best be done using which function?',
        type: 2,
        category: 6,
        answer: {
            options: ['strip_tags()', 'tidy_strip_html()', 'str_replace()', 'strip_html()'],
            correct: [1],
            link: ["http://www.php.net/manual/en/function.strip-tags.php"],
            explanation: []
        }
    },
    q93: {
        id: 93,
        text: 'When using a function such as strip_tags, are markup-based attacks still possible?',
        type: 2,
        category: 3,
        answer: {
            options: ['No, HTML does not pose any security risks', 'Yes, even a &lt;p&gt; HTML tag is a security risk', 'Yes, attributes of allowed tags are ignored', 'No, strip_tags will prevent any markup-based attack'],
            correct: [3],
            link: ["http://www.php.net/manual/en/function.strip-tags.php"],
            explanation: ["Number 3 is the more complete answer."]
        }
    },
    q94: {
        id: 94,
        text: 'Consider the following PHP string representing an SQL statement:\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\n$query = "UPDATE users SET password=\'$password\' WHERE username=\'$username\'";\n?&gt;\n</pre>\nWhich of the following values for <code>$username</code> or <code>$password</code> would change the behavior of this query when executed?</p>',
        type: 2,
        category: 3,
        answer: {
            options: ['None of the above', '$username = "foobar\' WHERE username=\'admin\'";', '$password = "foobar\' WHERE username=\'admin\' --:";', '$password = "\"foobar\" WHERE username=\"admin\"";'],
            correct: [3],
            link: ["http://php.net/manual/en/security.database.sql-injection.php"],
            explanation: ["The \"--\" is the SQL notation for a comment."]
        }
    },
    q95: {
        id: 95,
        text: 'SQL Injections can be best prevented using which of the following database technologies?',
        type: 2,
        category: 3,
        answer: {
            options: ['All of the above', 'Prepared Statements', 'Persistent Connections', 'Unbuffered Queries', 'Query escaping'],
            correct: [2],
            link: ["http://php.net/manual/en/pdo.prepared-statements.php"],
            explanation: ["the 5th option is also correct, but the 2nd is the right choice because we are asked for the \"best\" method."]
        }
    },
    q96: {
        id: 96,
        text: 'Where should indirectly executed PHP scripts (i.e. include files) be stored in the file system?',
        type: 2,
        category: 3,
        answer: {
            options: ['Outside of the Document Root', 'In the document root', 'Anywhere you want', 'In the database'],
            correct: [1],
            link: ["http://phpsec.org/projects/guide/3.html"],
            explanation: ["It's better to keep those files outside the document root in a private folder."]
        }
    },
    q97: {
        id: 97,
        text: 'When executing system commands from PHP, what should one do to keep applications secure?',
        type: 3,
        category: 3,
        answer: {
            options: ['Remove all quote characters from variables used in a shell execution', 'Avoid using shell commands when PHP equivlents are available', 'Hard code all shell commands', 'Escape all shell arguments', 'Escape all shell commands executed'],
            correct: [2, 3, 4],
            link: ["http://www.php.net/manual/en/function.exec.php"],
            explanation: []
        }
    },
    q98: {
        id: 98,
        text: 'Whyis it important from a security perspective to never display PHP error messages directly to the end user, yet always log them?',
        type: 3,
        category: 3,
        answer: {
            options: ['Error messages will contain sensitive session information', 'Error messages can contain cross site scripting attacks', 'Security risks involved in logging are handled by PHP', 'Error messages give the perception of insecurity to the user', 'Error messages can contain data useful to a potential attacker'],
            correct: [4, 5],
            link: ["http://www.w3schools.com/php/php_error.asp"],
            explanation: []
        }
    },
    q99: {
        id: 99,
        text: 'The MVC pattern in Web development involves which of the following components?',
        type: 3,
        category: 2,
        answer: {
            options: ['View', 'Controller', 'Validation', 'Model', 'Front Controller'],
            correct: [1, 2, 4],
            link: ["http://en.wikipedia.org/wiki/Model–view–controller"],
            explanation: ["MVC = Model View Controller"]
        }
    },
    q100: {
        id: 100,
        text: 'Which of the following aspects of the MVC pattern is used in conjunction with the database?',
        type: 2,
        category: 2,
        answer: {
            options: ['Model', 'Schema', 'Validation', 'Controller', 'View'],
            correct: [1],
            link: ["http://en.wikipedia.org/wiki/Model–view–controller"],
            explanation: ["Hello, my name Borat. Me gusta model."]
        }
    },
    q101: {
        id: 101,
        text: 'What are the primary benefits of object oriented programming?',
        type: 3,
        category: 2,
        answer: {
            options: ['Maintainability', 'Execution Speed', 'Encapsulation', 'Code Reuse'],
            correct: [1, 3, 4],
            link: ["http://en.wikipedia.org/wiki/Object-oriented_programming#cite_ref-realisticcodereuse_23-0"],
            explanation: []
        }
    },
    q102: {
        id: 102,
        text: 'What consistutes a View in the MVC pattern for PHP 5, in the following list?',
        type: 3,
        category: 2,
        answer: {
            options: ['Iterators', 'PDO', 'Classes', 'PHP', 'Smarty'],
            correct: [4, 5],
            link: ["http://en.wikipedia.org/wiki/Model–view–controller#Concepts"],
            explanation: ["Smarty is a templating system, while PHP is also, in itself, a templating system."]
        }
    },
    q103: {
        id: 103,
        text: 'Which of the following extensions are no longer part of PHP 5 and have been moved to PECL?',
        type: 3,
        category: 9,
        answer: {
            options: ['tidy', 'mysql', 'w32api', 'curl', 'dio'],
            correct: [3, 5],
            link: ["http://www.php.net/manual/en/intro.w32api.php", "http://www.php.net/manual/en/intro.dio.php"],
            explanation: ["Tidy is also a part os PECL, but it is so since PHP4. \nThis question does not affect the PHP 5.3 certification exam, as difference between PHP4 and PHP5 are no longer part of the test."]
        }
    },
    q104: {
        id: 104,
        text: 'Which of the following functions were added to PHP 5 for dealing with arrays?',
        type: 3,
        category: 9,
        answer: {
            options: ['array_intersect_key()', 'array_unshift()', 'array_diff_key()', 'array_merge()', 'array_slice()'],
            correct: [1, 3],
            link: ["http://www.php.net/manual/en/function.array-intersect-key.php", "http://www.php.net/manual/en/function.array-diff-key.php"],
            explanation: ["This question does not affect the PHP 5.3 certification exam, as difference between PHP4 and PHP5 are no longer part of the test."]
        }
    },
    q105: {
        id: 105,
        text: 'Consider the following script:\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\nfunction func(&amp;$arraykey) { \n\treturn $arraykey; \n\t// function returns by value!\n}\n\n$array = array(\'a\', \'b\', \'c\');\nforeach (array_keys($array) as $key) { \n\t$y = &amp;func($array[$key]); \n\t$z[] =&amp; $y;\n}\n\nvar_dump($z);\n?&gt;\n</pre>\n\nThiscode has changed behavior in PHP 5. Identify the output of this scriptas it would have been in PHP 4, as well as the new behavior in PHP 5.',
        type: 3,
        category: 9,
        answer: {
            options: ['array(\'a\', \'a\', \'b\')', 'array(\'a\', \'b\', \'c\')', 'array(\'c\', \'b\', \'a\')', 'array(\'c\', \'c\', \'c\')', 'array(\'b\', \'b\', \'b\')'],
            correct: [2, 4],
            link: ["http://www.php.net/manual/en/language.references.return.php", "http://php.net/manual/en/functions.returning-values.php"],
            explanation: ["This question does not affect the PHP 5.3 certification exam, as difference between PHP4 and PHP5 are no longer part of the test."]
        }
    },
    q106: {
        id: 106,
        text: 'Consider the following code block:\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\nfunction &amp;myFunction() { \n\t$string = "MyString"; \n\tvar_dump($string); \n\treturn ($undefined);\n}\n\nfor($i = 0; $i &lt; 10; $i++) { \n\t$retval = myFunction();\n}\n?&gt;\n</pre>\n\nThis code block\'s behavior has changed between PHP 4 and PHP 5. Why?',
        type: 2,
        category: 9,
        answer: {
            options: ['None of the above', 'This could would cause an automatic segmentation fault in PHP 4', 'This code would throw a syntax error in PHP 4', 'Returning an undefined variable by reference in PHP 4 would cause eventual memory corruption', 'You could not return undefined variables by reference in PHP 4'],
            correct: [1],
            link: ["http://php.net/manual/en/function.return.php"],
            explanation: ["This question does not affect the PHP 5.3 certification exam, as difference between PHP4 and PHP5 are no longer part of the test."]
        }
    },
    q107: {
        id: 107,
        text: 'When migrating the following code from PHP 4 to PHP 5, what should be changed?\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\nclass MyClass {\n\tfunction MyClass($param) {\n\t\t/* Do something with $param */\n\t\t$this-&gt;_doSomething($param);\n\t}\n\n\t// Private method to MyClass\n\tfunction _doSomething($param) {\n\t\t/* Do something with $param */\n\t}\n}\n\nclass AnotherClass extends MyClass {\n\tvar $param = "foo";\n\n\tfunction AnotherClass() {\n\t\tparent::MyClass($this-&gt;param);\n\t}\n}\n?&gt;\n</pre>',
        type: 3,
        category: 9,
        answer: {
            options: ['Access modifiers should be added to methods', 'The Constructors for the objects should both be renamed to __construct', 'The use of the parent keyword has changed to \'super\'', 'Constructors must have the same parameter lists'],
            correct: [1, 2],
            link: ["http://php.net/manual/en/language.oop5.decon.php", "http://devzone.zend.com/article/1714#Heading4"],
            explanation: ["This question does not affect the PHP 5.3 certification exam, as difference between PHP4 and PHP5 are no longer part of the test."]
        }
    },
    q108: {
        id: 108,
        text: 'Assuming every method call below returns an instance of an object, how can the following be re-written in PHP 5?\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\n$a = new MyClass();\n$b = $a-&gt;getInstance();\n$c = $b-&gt;doSomething();\n?&gt;\n</pre>',
        type: 2,
        category: 9,
        answer: {
            options: ['$c = ((MyClass)$a-&gt;getInstance())-&gt;doSomething();', 'This cannot be re-written in PHP 5', '$c = $a-&gt;getInstance()-&gt;doSomething();', '$c = (MyClass)$a-&gt;getInstance();', '$c = (new MyClass())-&gt;getInstance()-&gt;doSomething();'],
            correct: [3, 5],
            link: [],
            explanation: ["This question does not affect the PHP 5.3 certification exam, as difference between PHP4 and PHP5 are no longer part of the test."]
        }
    },
    q109: {
        id: 109,
        text: 'How can the following code be re-written from PHP 4 to PHP 5?\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\nif(get_class($myObj) == "MyClass") {\n\t// Do something\n}\n?&gt;\n</pre>',
        type: 2,
        category: 9,
        answer: {
            options: ['if(get_class($myObj) === "MyObject)', 'if(strtolower(get_class($myObj)) == "MyClass")', 'if($myObj implements MyClass)', 'if($myObj instanceof Object)', 'if($myObj instanceof MyClass)'],
            correct: [5],
            link: ["http://php.net/manual/en/internals2.opcodes.instanceof.php"],
            explanation: ["This question does not affect the PHP 5.3 certification exam, as difference between PHP4 and PHP5 are no longer part of the test."]
        }
    },
    q110: {
        id: 110,
        text: 'Is this code valid only in PHP 4, in PHP 5, or both?\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\nfunction myfunction(&amp;$myvalue = null) { \n\t/* ... */\n}\n?&gt;\n</pre>',
        type: 2,
        category: 9,
        answer: {
            options: ['Both', 'PHP 5', 'PHP 4'],
            correct: [2],
            link: ["http://php.net/manual/en/functions.arguments.php"],
            explanation: ["This question does not affect the PHP 5.3 certification exam, as difference between PHP4 and PHP5 are no longer part of the test."]
        }
    },
    q111: {
        id: 111,
        text: 'Unlikea database such as MySQL, SQLite columns are not explicitly typed.Instead, SQLite catagorizes data into which of the following catagories?',
        type: 3,
        category: 7,
        answer: {
            options: ['textual', 'unicode', 'numeric', 'binary', 'constant'],
            correct: [1, 3],
            link: ["http://www.sqlite.org/datatype3.html"],
            explanation: ["The database engine may convert values between numeric storage classes (INTEGER and REAL) and TEXT during query execution."]
        }
    },
    q112: {
        id: 112,
        text: 'Which of the following SQL statements will improve SQLite write performance?',
        type: 2,
        category: 7,
        answer: {
            options: ['PRAGMA locking_mode = "Row";', 'PRAGMA count_table_changes = Off;', 'PRAGMA default_synchronous = Off;', 'PRAGMA default_synchronous = On;', 'PRAGMA locking_mode = "Table";'],
            correct: [3],
            link: ["http://web.utk.edu/~jplyon/sqlite/SQLite_optimization_FAQ.html#pragmas", "http://www.sqlite.org/pragma.html"],
            explanation: ["Only the 3rd and 4th options exists (locking_mode accepts NORMAL or EXCLUSIVE values). The 2nd option can be confused with count_table_changes, a deprecated option that would have -previously- improved performance."]
        }
    },
    q113: {
        id: 113,
        text: 'Consider the following code snippet:\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\n$link = mysqli_connect("hostname", "username", "password");\n\nif(!$link){ \n\t$error = ?????? \n\tdie("Could not connect to the database: $error");\n}\n?&gt;\n</pre>\n\nWhat would go in place of the ???? above for this script to function properly?',
        type: 2,
        category: 7,
            answer: {
            options: ['mysqli_connect_error();', 'mysqli_connect_error($link);', 'mysqli_error();', '$_MySQL[\'connect_error\']', 'mysqli_get_connect_error();'],
            correct: [1],
            link: ["http://php.net/manual/en/mysqli.connect-error.php"],
                explanation: ["The first option is the good one, the third one would also return the error but it would need the $link provided."]
        }
    },
    q114: {
        id: 114,
        text: 'Consider the following code snippet:\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\n$query = "INSERT INTO mytable (myinteger, mydouble, myblob, myvarchar) VALUES (?, ?, ?, ?)";\n$statement = mysqli_prepare($link, $query);\n\nif(!$statement){ \n\tdie(mysqli_error($link));\n}\n\n/* The variables being bound to by MySQLi don\'t need to exist prior to binding */\nmysqli_bind_param($statement, "idbs", $myinteger, $mydouble, $myblob, $myvarchar);\n\n/* ???????????? */ \n\n/* execute the query, using the variables as defined. */\nif(!mysqli_execute($statement)){ \n\tdie(mysqli_error($link));\n}\n?&gt;\n</pre>\n\nAssuming this snippet is a smaller part of a correctly written script, what actions must occur in place of the <code>?????</code> in the above code snippet to insert a row with the following values: <code>10</code>, <code>20.2</code>, <code>foo</code>, <code>string</code> ?',
        type: 2,
        category: 7,
        answer: {
            options: ['A transaction must be begun and the variables must be assigned', 'Each value must be assigned prior to calling mysqli_bind_param(), and thus nothing should be done', 'Use mysqli_bind_value() to assign each of the values', 'Assign $myinteger, $mydouble, $myblob, $myvarchar the proper values'],
            correct: [4],
            link: ["http://www.php.net/manual/en/mysqli-stmt.bind-param.php", "http://php.net/manual/en/mysqli.prepare.php"],
            explanation: []
        }
    },
    q115: {
        id: 115,
        text: 'Consider the following code snippet:\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\n$query = "SELECT first, last, phone FROM contacts WHERE first LIKE \'John%\'";\n$statement = mysqli_prepare($link, $query);\nmysqli_execute($statement);\n\n/* ???? */\n\nwhile(($result = mysqli_stmt_fetch($statement))) { \n\tprint "Name: $first $last"; \n\tprint "Phone: $phone";\n}\n?&gt;\n</pre>\n\nAssuming this code snippet is part of a larger correct application, what must be done in place of the <code>????</code> above for the correct output to be displayed?',
        type: 2,
        category: 7,
        answer: {
            options: ['None of the above', 'mysqli_fetch_columns($first, $last, $phone);', 'mysqli_stmt_bind_result($statement, $first, $last, $phone);', 'A while loop, fetching the row and assigning $first, $last, and $phone the proper value'],
            correct: [3],
            link: ["http://www.php.net/manual/en/mysqli-stmt.bind-result.php"],
            explanation: []
        }
    },
    q116: {
        id: 116,
        text: 'Which of the following cases are cases when you should use transactions?',
        type: 3,
        category: 7,
        answer: {
            options: ['Updating a single row in a table', 'Inserting a new row into a single table', 'Performing a stored procedure', 'Selecting rows from multiple different tables', 'Updating a single row in multiple different tables'],
            correct: [5],
            link: ["http://php.net/manual/en/pdo.transactions.php"],
            explanation: []
        }
    },
    q117: {
        id: 117,
        text: 'PHP 5 supports which of the following XML parsing methods?',
        type: 3,
        category: 4,
        answer: {
            options: ['SAX', 'FastDOM', 'DOM', 'XPath', 'XML to Object mapping'],
            correct: [1, 3, 4, 5],
            link: ["http://pear.php.net/package/XML_HTMLSax", "http://php.net/manual/de/book.dom.php", "http://php.net/manual/de/simplexmlelement.xpath.php", "http://www.php.net/manual/en/function.simplexml-load-file.php"],
            explanation: ["XML to Object mapping is another name for the more commonly know SimpleXML."]
        }
    },
    q118: {
        id: 118,
        text: 'Which of the following is not a valid PDO DSN?',
        type: 2,
        category: 7,
        answer: {
            options: ['All of the above are valid', 'mysql:unix_socket=/tmp/mysql.sock;dbname=testdb', 'oci:dbname=//localhost:1521/mydb', 'mysql:host=localhost;port=3307;dbname=testdb', 'sqlite2:/opt/databases/mydb.sq2'],
            correct: [1],
            link: ["http://php.net/manual/en/pdo.drivers.php", "http://www.php.net/manual/en/ref.pdo-mysql.connection.php", "http://www.php.net/manual/en/ref.pdo-oci.connection.php", "http://www.php.net/manual/en/ref.pdo-sqlite.connection.php"],
            explanation: []
        }
    },
    q119: {
        id: 119,
        text: 'When connecting to a database using PDO, what must be done to ensure that database credentials are not compromised if the connection were to fail?',
        type: 2,
        category: 7,
        answer: {
            options: ['Wrap the PDO DSN in a try/catch block to catch any connection exception', 'Use constants in the PDO DSN', 'Place the login credentials in the php.ini file', 'Disable E_STRICT and E_NOTICE error reporting levels'],
            correct: [1],
            link: ["http://www.php.net/manual/en/pdo.connections.php"],
            explanation: ["Without using a try/catch the DSN will be printed through the output."]
        }
    },
    //------------------------------------------------------------------------------------------------------------------
    q120: {
        id: 120,
        text: 'Consider the following script:\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\ntry { \n\t$dbh = new PDO("sqlite::memory:");\n} catch(PDOException $e) { \n\tprint $e-&gt;getMessage();\n}\n\n$dbh-&gt;query("CREATE TABLE foo(id INT)");\n$stmt = $dbh-&gt;prepare("INSERT INTO foo VALUES(:value)");\n$value = null;\n$data = array(1,2,3,4,5);\n$stmt-&gt;bindParam(":value", $value);\n\n/* ?????? */\n\ntry { \n\tforeach($data as $value) { \n\t\t/* ????? */ \n\t}\n} catch(PDOException $e) { \n\t/* ??????? */\n}\n\n/* ?????? */\n?&gt;\n</pre>\n\nWhatlines of code need to go into the missing places above in order forthis script to function properly and insert the data into the databasesafely?',
        type: 3,
        category: 7,
        answer: {
            options: ['$dbh-&gt;beginTransaction();', '$dbh-&gt;commit();', '$stmt-&gt;execute();', '$dbh-&gt;rollback();', '$dbh-&gt;query($stmt);'],
            correct: [1, 2, 3, 4],
            link: ["http://www.php.net/manual/en/pdo.query.php"],
            explanation: ["You have to include the commit at the end and the rollback inside the catch."]
        }
    },
    q121: {
        id: 121,
        text: 'Implementing your own PDO class requires which steps from the list below?',
        type: 3,
        category: 7,
        answer: {
            options: ['Extending the PDOStatement Class', 'Set the PDO::ATTR_STATEMENT_CLASS parameter', 'Call the PDO::setStatementClass() method', 'Extend the PDO class', 'Set the PDO::ATTR_USE_CLASS paramater'],
            correct: [1, 2, 4],
            link: ["http://php.net/manual/en/book.pdo.php"],
            explanation: []
        }
    },
    q122: {
        id: 122,
        text: 'When embedding PHP into XML documents, what must you ensure is true in order for things to function properly?',
        type: 2,
        category: 4,
        answer: {
            options: ['Disabling of the short_tags PHP.ini directive', 'Enabling the asp_tags PHP.ini directive', 'That you have XPath support enabled in PHP 5', 'That your XML documents are well-formed', 'None of the above, PHP can be embedded in XML in all cases.'],
            correct: [4],
            link: ["http://www.daaq.net/old/php/index.php?page=embedding+php&parent=php+basics"],
            explanation: ["There's important to mention that php short tags (short_open_tags, close to the first option) are greatly discouraged. \nIf you want to code to XML standards, short tags are a problem, since they will cause the PHP processor to try to treat all XML processing directives as PHP statements, whether they are or not. And, as such, you will have to code XML as follows: &lt;?xml ... ?&gt;"]
        }
    },
    q123: {
        id: 123,
        text: 'What XML technology is used when you mix two different document types in a single XML document?',
        type: 2,
        category: 4,
        answer: {
            options: ['Validators', 'DTD', 'Transformations', 'Namespaces'],
            correct: [4],
            link: ["http://www.w3schools.com/xml/xml_namespaces.asp"],
            explanation: ["Use namespaces to avoid possible conflicts between two elements from different sources with the same name (but, possibly, different data)."]
        }
    },
    q124: {
        id: 124,
        text: 'Consider the following example XML document:\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?xml version="1.0" encoding="ISO-8859-1" ?&gt;\n&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;\n&lt;html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en"&gt;\n\t&lt;head&gt;\n\t\t&lt;title&gt;XML Example&lt;/title&gt;\n\t\t&lt;/head&gt;\n\t&lt;body&gt;\n\t\t&lt;p&gt;\n\t\t\tMoved to &lt;a href="http://example.org/"&gt;http://www.example.org/&lt;/a&gt;\n\t\t\t&lt;br&gt;\n\t\t&lt;/p&gt;\n\t&lt;/body&gt;\n&lt;/html&gt;\n</pre>\n\nWhat is wrong with this document, and how can it be corrected?',
        type: 3,
        category: 4,
        answer: {
            options: ['The document is completely valid', 'All special XML characters must be represented as entities within the content of a node', 'All tags must be closed', 'You cannot specify a namespace for the &lt;html&gt; attribute', 'The DOCTYPE declaration is malformed'],
            correct: [2, 3],
            link: ["http://en.wikipedia.org/wiki/Well-formed_element", "http://en.wikipedia.org/wiki/XML#Escaping"],
            explanation: []
        }
    },
    q125: {
        id: 125,
        text: 'Event-based XML parsing is an example of which parsing model?',
        type: 2,
        category: 4,
        answer: {
            options: ['SAX', 'DOM', 'XML Object Mapping', 'XPath', 'XQuery'],
            correct: [1],
            link: ["http://en.wikipedia.org/wiki/Simple_API_for_XML#XML_processing_with_SAX"],
            explanation: []
        }
    },
    q126: {
        id: 126,
        text: 'Consider the following code segment:\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\n$xmldata = &lt;&lt;&lt; XML\n&lt;?xml version="1.0" encoding="ISO-8859-1" ?&gt;\n&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;\n&lt;html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en"&gt; \n\t&lt;head&gt; \n\t\t&lt;title&gt;XML Example&lt;/title&gt; \n\t&lt;/head&gt; \n\t&lt;body&gt; \n\t\t&lt;p&gt; \n\t\t\tMoved to &lt;a href="http://example.org/"&gt;http://www.example.org/&lt;/a&gt;\n\t\t\t&lt;br/&gt;\n\t\t&lt;/p&gt;\n\t&lt;/body&gt;\n&lt;/html&gt;\nXML;\n\n$xml = xml_parser_create("UTF-8");\n\n/* ??????? */\n\nxml_parse($xml, $xmldata);\n\nfunction xml_start_handler($xml, $tag, $attributes) {\n\tprint "Tag: $tag&lt;br/&gt;";\n}\n\nfunction xml_end_handler($xml, $tag) {}\n?&gt;\n</pre>\n\nWhat should be placed in place of <code>??????</code> above to have the above script display the name of each tag within the XML document?',
        type: 2,
        category: 4,
        answer: {
            options: ['xml_set_callback("xml_start_handler");', 'xml_set_element_handler($xml, "xml_start_handler", "xml_end_handler");', 'xml_node_set_handler("xml_start_handler", "xml_end_handler");', 'xml_node_set_handler("xml_start_handler");'],
            correct: [2],
            link: ["http://php.net/manual/en/function.xml-set-element-handler.php"],
            explanation: []
        }
    },
    q127: {
        id: 127,
        text: 'What is the primary benefit of a SAX-based XML parser compared to DOM?',
        type: 2,
        category: 4,
        answer: {
            options: ['All of the above', 'Faster then DOM methods', 'Requires less memory then DOM', 'Easier to develop parsers'],
            correct: [1],
            link: ["http://en.wikipedia.org/wiki/Simple_API_for_XML#Benefits"],
            explanation: ["SAX is lighter than DOm because it doesn't need to keep the entire XML allocated in memory as an object, it's faster because it uses a tree model search and it's easier (perhaps arguably) to develop parsers using SAX because it can bind functions to every open/closing tag. \nKeep in mind that the question specifies XML parser, it does not tale into account node creation or XML manipulation."]
        }
    },
    q128: {
        id: 128,
        text: 'What does the following PHP script accomplish?\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php \n$dom = new DomDocument(); \n$dom-&gt;load(\'test.xml\'); \n$body = $dom-&gt;documentElement-&gt;getElementsByTagName(\'body\')-&gt;item(0); \n\necho $body-&gt;getAttributeNode(\'background\')-&gt;value."";\n?&gt;\n</pre>',
        type: 2,
        category: 4,
        answer: {
            options: ['Displays the content of every &lt;body&gt; node', 'Displays the "background" attribute for the first node in the XML document named "body"', 'Displays the content of every node that has a "background" node', 'Displays the "background" attribute of every node named "body"'],
            correct: [2],
            link: ["http://www.php.net/manual/en/function.domdocument-get-elements-by-tagname.php"],
            explanation: []
        }
    },
    q129: {
        id: 129,
        text: 'Creating new nodes in XML documents using PHP can be done using which XML/PHP 5 technologies?',
        type: 3,
        category: 4,
        answer: {
            options: ['XQuery', 'XPath', 'SimpleXML', 'DOM', 'SAX'],
            correct: [3, 4],
            link: ["http://php.net/manual/en/class.simplexmlelement.php", "http://php.net/manual/en/domdocument.createelement.php"],
            explanation: ["SimpleXML can be used to create new nodes, as can DOM/DOMDocument. However, in both cases, it's important to note that you're editing an in-memory copy of the XML file; to save the data, you have to call the appropriate save() method \ne.g. SimpleXML::asXML()"]
        }
    },
    q130: {
        id: 130,
        text: 'Consider the following simple PHP script:\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\n$dom = new DomDocument();\n$dom-&gt;load(\'test.xml\');\n$xpath = new DomXPath($dom);\n\n$nodes = $xpath-&gt;query(???????, $dom-&gt;documentElement);\n\necho $nodes-&gt;item(0)-&gt;getAttributeNode(\'bgcolor\')-&gt;value . "";\n?&gt;\n</pre>\n\nWhat XPath query should go in the <code>?????? above</code> to display the "bgcolor" attribute of the first "body" node in the XML document?',
        type: 2,
        category: 4,
        answer: {
            options: ['"*[local-name()=\'body\']"', '"/body[0]/text"', '"/body/body[0]"', '"name=\'body\'"', '"*[lname()=\'body\']"'],
            correct: [1],
            link: ["http://www.w3schools.com/xpath/xpath_functions.asp", "http://www.w3.org/TR/xpath/#function-local-name"],
            explanation: []
        }
    },
    q131: {
        id: 131,
        text: 'Consider the following PHP script fragment:\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\n$title = $dom-&gt;createElement(\'title\');\n\n$node = ????????\n\n$title-&gt;appendChild($node);\n$head-&gt;appendChild($title);\n?&gt;\n</pre>\n\nWhat should <code>???????</code> be replaced with to add a <code>&lt;title&gt;</code> node with the value of <code>Hello, World</code>',
        type: 2,
        category: 4,
        answer: {
            options: ['$dom-&gt;createTextNode("Hello, World");', '$dom-&gt;appendElement($title, "text", "Hello, world!");', '$dom-&gt;appendTextNode($title, "Hello, World!");', '$dom-&gt;createElement(\'text\', "Hello, World");', 'None of the above'],
            correct: [1],
            link: ["http://php.net/manual/en/domdocument.createtextnode.php", "http://php.net/manual/en/domdocument.createelement.php"],
            explanation: []
        }
    },
    q132: {
        id: 132,
        text: 'When working with <code>SimpleXML</code> in PHP 5, the four basic rules on how the XML document is accessed are which of the following?',
        type: 3,
        category: 4,
        answer: {
            options: ['Element namespaces are denoted by the \'namespace\' attribute', 'converting an element to a string denotes text data', 'Non-numeric indexes are element attributes', 'Numeric indexes are elements', 'Properties denote element iterators'],
            correct: [2, 3, 4, 5],
            link: ["http://docs.php.net/manual/en/simplexmlelement.getnamespaces.php", "http://www.php.net/manual/en/simplexml.examples-basic.php"],
            explanation: ["namespaces are denoted by xmlns:_____"]
        }
    },
    q133: {
        id: 133,
        text: 'SimpleXML objects can be created from what types of data sources?',
        type: 3,
        category: 4,
        answer: {
            options: ['A String', 'An array', 'A DomDocument object', 'A URI', 'A Database resource'],
            correct: [1, 3, 4],
            link: ["http://php.net/manual/en/simplexmlelement.construct.php"],
            explanation: []
        }
    },
    q134: {
        id: 134,
        text: 'Given the following XML document in a SimpleXML object:\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?xml version="1.0" encoding="ISO-8859-1" ?&gt;\n&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;\n&lt;html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en"&gt;\n\t&lt;head&gt;\n\t\t&lt;title&gt;XML Example&lt;/title&gt;\n\t&lt;/head&gt;\n\t&lt;body&gt;\n\t\t&lt;p&gt;\n\t\t\tMoved to &lt;a href="http://example.org/"&gt;http://www.example.org/&lt;/a&gt;\n\t\t\t&lt;br/&gt;\n\t\t&lt;/p&gt;\n\t&lt;/body&gt;\n&lt;/html&gt;\n</pre>\n\nSelect the proper statement below which will display the HREF attribute of the anchor tag.',
        type: 2,
        category: 4,
        answer: {
            options: ['$sxe-&gt;body-&gt;p[0]-&gt;a[1][\'href\']', '$sxe-&gt;body-&gt;p-&gt;a-&gt;href', '$sxe-&gt;body-&gt;p-&gt;a[\'href\']', '$sxe[\'body\'][\'p\'][0][\'a\'][\'href\']', '$sxe-&gt;body-&gt;p[1]-&gt;a[\'href\']'],
            correct: [3],
            link: ["http://www.php.net/manual/en/simplexml.examples-basic.php"],
            explanation: ["If no index is specified for a node element, [0] is taken as default."]
        }
    },
    q135: {
        id: 135,
        text: 'Given the following PHP script:\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\n$xmldata = &lt;&lt;&lt; XML\n&lt;?xml version="1.0" encoding="ISO-8859-1" ?&gt;\n&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;\n&lt;html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en"&gt;\n\t&lt;head&gt;\n\t&lt;title&gt;XML Example&lt;/title&gt;\n\t&lt;/head&gt;\n\t&lt;body&gt;\n\t\t&lt;p&gt;\n\t\t\t&lt;b&gt;Hello, World!&lt;/b&gt;\n\t\t&lt;/p&gt;\n\t&lt;/body&gt;\n&lt;/html&gt;\nXML;\n\n$sxe = simplexml_load_string($xmldata);\n$p = $sxe-&gt;body-&gt;p;\n\n$string = ????????\n\nprint $string;\n?&gt;\n</pre>\n\nWhat should go in place of <code>?????</code> above to print the string <code>Hello, World!</code> (with no leading/trailing whitespace or markup)?',
        type: 2,
        category: 4,
        answer: {
            options: ['trim(($p[1]));', 'trim(strip_tags(($p-&gt;asText())));', 'trim(strip_tags(($p-&gt;asXML())));', 'trim(($p-&gt;asXML()));', 'strip_tags(($p-&gt;asXML()));'],
            correct: [3],
            link: ["http://php.net/manual/en/simplexmlelement.asxml.php"],
            explanation: ["The function asText() does not exist in SimpleXMLElement."]
        }
    },
    q136: {
        id: 136,
        text: 'The following is a common XML structure used in service oriented architectures, what does it represent?\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?xml version="1.0"?&gt;\n&lt;methodCall&gt;\n\t&lt;methodName&gt;myMethod&lt;/methodName&gt;\n\t&lt;params&gt;\n\t\t&lt;param&gt;\n\t\t\t&lt;value&gt;\n\t\t\t\t&lt;string&gt;HI!&lt;/string&gt;\n\t\t\t&lt;/value&gt;\n\t\t&lt;/param&gt;\n\t&lt;/params&gt;\n&lt;/methodCall&gt;\n</pre>',
        type: 2,
        category: 4,
            answer: {
            options: ['None of the above', 'A fragment of a complete SOAP request', 'XML-RPC', 'REST', 'SOAP'],
            correct: [3],
            link: ["http://en.wikipedia.org/wiki/XML-RPC"],
            explanation: ["Used to specify a method to call and it's params."]
        }
    },
    q137: {
        id: 137,
        text: 'Which of the following functions are part of PHP\'s internal <code>Iterator</code> interface?',
        type: 3,
        category: 8,
        answer: {
            options: ['rewind()', 'valid()', 'next()', 'key()', 'current()', 'forward()', 'unset()', 'prev()', 'value()'],
            correct: [1, 2, 3, 4, 5],
            link: ["http://php.net/manual/en/class.iterator.php"],
            explanation: []
        }
    },
    q138: {
        id: 138,
        text: 'Consider the following script:\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\n$dom = new DOMDOcument();\n$dom-&gt;load("myxmlfile.xml");\nforeach($dom-&gt;documentElement-&gt;childNodes as $child) { \n\tif(($child-&gt;nodeType == XML_ELEMENT_NODE) &amp;&amp; $child-&gt;nodeName == "item") { \n\t\tforeach($child-&gt;childNodes as $item) { \n\t\t\tif(($item-&gt;nodeType == XML_ELEMENT_NODE) &amp;&amp; ($item-&gt;nodeName == "title")) { \n\t\t\t\tprint "$item-&gt;firstChild-&gt;data"; \n\t\t\t} \n\t\t} \n\t} \n}\n?&gt;\n</pre>\n\nAssumingthe referenced XML document exists and matches the parsing logic, whatshould be displayed when this script is executed?',
        type: 2,
        category: 4,
        answer: {
            options: ['None of the above', 'The XML of each \'title\' node', 'The XML of each \'item\' node', '"Title" for every title node in the document', 'The contents of every \'title\' node which exists under an \'item\' node'],
            correct: [1],
            link: ["http://php.net/manual/en/function.domnode-node-type.php"],
            explanation: ["Another tricky question, the print should have the variable inside curly braces."]
        }
    },
    q139: {
        id: 139,
        text: 'Which of the following methods are used to fetch data from a PDO Statement?',
        type: 3,
        category: 7,
        answer: {
            options: ['fetchColumn()', 'fetchObject()', 'fetch()', 'fetchClass()', 'fetchRow()'],
            correct: [1, 2, 3],
            link: ["http://php.net/manual/en/pdostatement.fetch.php"],
            explanation: []
        }
    },
    q140: {
        id: 140,
        text: 'In a general sense, which is more important: performance or maintainability of an application?',
        type: 2,
        category: 2,
        answer: {
            options: ['performance first, maintainability second', 'Maintainability first, performance second', 'Maintainability', 'Performance'],
            correct: [2],
            link: [],
            explanation: ["Keep in mind that we are asked 'in a general sense'."]
        }
    },
    q141: {
        id: 141,
        text: 'When writing portable database code using PDO, what is the <code>PDO::ATTR_CASE</code> attribute useful for?',
        type: 2,
        category: 7,
        answer: {
            options: ['None of the above', 'Ensuring that all columns are of a particular case when fetched', 'Adjusting the case of a query before it is processed for compatibility reasons', 'Controls the switch logic of how queries are processed', 'Allows you to adjust the memory cache (or "case") for increased performance'],
            correct: [2],
            link: ["http://php.net/manual/en/pdo.setattribute.php"],
            explanation: ["According to the manual, PDO::ATTR_CASE forces column names to a specific case."]
        }
    },
    q142: {
        id: 142,
        text: 'Consider the following PHP code segment, which attempts to execute a PDO query:\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\ntry { \n\t$dbh-&gt;exec($sql);\n} catch (PDOException $e) { \n\t// display warning message \n\t$info = $e-&gt;errorInfo;\n}\n?&gt;\n</pre>\n\nIn the event of a PDOException, <code>$info</code> is set with the contents of the <code>$errorInfo</code> property of the exception. Which of the following are accurate descriptions of the contents?',
        type: 3,
        category: 7,
        answer: {
            options: ['$info[1] is the database-specific error code', '$info[2] is the database-specific error message', '$info[1] is the unified error code', '$info[0] is the unified error code', '$info[0] Is the Database-specific error message'],
            correct: [1, 2, 4],
            link: ["http://www.php.net/manual/en/pdo.errorinfo.php"],
            explanation: []
        }
    },
    q143: {
        id: 143,
        text: 'Which of the following functions allow you to introspect the call stack during execution of a PHP script?',
        type: 3,
        category: 0,
        answer: {
            options: ['get_backtrace()', 'get_function_stack()', 'debug_backtrace()', 'debug_print_backtrace()', 'print_backtrace()'],
            correct: [3, 4],
            link: ["http://php.net/manual/en/function.debug-backtrace.php", "http://www.php.net/manual/en/function.debug-print-backtrace.php"],
            explanation: []
        }
    },
    q144: {
        id: 144,
        text: 'When working with a database, which of the following can be used to mitigate the possibility of exposing your database credentials to a malicious user?',
        type: 3,
        category: 3,
        answer: {
            options: ['Moving all database credentials into a single file', 'Moving all database credentials outside of the document root', 'Restricting access to files not designed to be executed independently', 'Setting credential information as system environment variables', 'Using PHP constants instead of variables to store credentials'],
            correct: [2, 3, 4],
            link: [],
            explanation: []
        }
    },
    q145: {
        id: 145,
        text: 'When running PHP in a shared host environment, what is the major security concern when it comes to session data?',
        type: 2,
        category: 1,
        answer: {
            options: ['Sessions on shared hosts are easily hijacked by outside malicious users', 'All of the above', 'You cannot use a custom data store in shared hosts', 'Session data stored in the file system can be read by other scripts on the same shared host', 'Users outside the shared host can access any site which created a session for them'],
            correct: [4],
            link: ["http://phpsec.org/projects/guide/5.html"],
            explanation: []
        }
    },
    q146: {
        id: 146,
        text: 'Which of the following are examples of the new engine executor models available in PHP 5?',
        type: 3,
        category: 9,
        answer: {
            options: ['Switch', 'Conditional', 'Goto', 'Call', 'Dynamic'],
            correct: [1, 3, 4],
            link: ["http://sebastian-bergmann.de/archives/504-PHP-5.1-Performance.html"],
            explanation: ["This question does not affect the PHP 5.3 certification exam, as difference between PHP4 and PHP5 are no longer part of the test."]
        }
    },
    q147: {
        id: 147,
        text: 'Which of the following are not true about streams?',
        type: 3,
        category: 5,
        answer: {
            options: ['They are always seekable', 'When used properly they significantly reduce memory consumption', 'They can be applied to any data source', 'They are always bi-directional', 'They can be filtered'],
            correct: [1, 4],
            link: ["http://www.php.net/manual/en/streamwrapper.stream-seek.php", "http://www.php.net/manual/en/function.stream-get-meta-data.php", "http://php.net/manual/en/function.popen.php"],
            explanation: ["Beware of answers with 'always' or 'never'."]
        }
    },
    q148: {
        id: 148,
        text: 'Using <code>flock()</code> to lock a stream is only assured to work under what circumstances?',
        type: 2,
        category: 5,
        answer: {
            options: ['When running in a Linux environment local filesystem', 'When accessing the stream of the local filesystem', 'When running in a Windows environment and accessing a share', 'When accessing a bi-directional stream', 'When accessing a read-only stream'],
            correct: [2],
            link: ["http://php.net/manual/en/function.flock.php"],
            explanation: ["PHP supports locking on 'virtually every platform, including Windows'."]
        }
    },
    q149: {
        id: 149,
        text: 'What is wrong with the following code snippet? \n(assume default configuration values apply)\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\n$fp = fsockopen(\'www.php.net\', 80);\nfwrite($fp, "GET / HTTP/1.0\\rHost: www.php.net\\r\\n");\n\n$data = fread($fp, 8192);?&gt;</pre>',
        type: 2,
        category: 5,
        answer: {
            options: ['The request is blocking and may cause fread() to hang', 'The HTTP request is malformed', 'This script should be re-written using fgets() instead of fread()', 'The request is non-blocking and fread() may miss the response', 'You cannot use fwrite() with fsockopen()'],
            correct: [2],
            link: ["http://php.net/manual/en/function.fsockopen.php"],
            explanation: ["HTTP request must be ended with '\\n\\n' or '\\r\\n\\r\\n'."]
        }
    },
    q150: {
        id: 150,
        text: '_______can be used to add additional functionality to a stream, such asimplementation of a specific protocol on top of a normal PHP streamimplementation.',
        type: 2,
        category: 5,
        answer: {
            options: ['Buffered', 'Buckets', 'Wrappers', 'Filters'],
            correct: [3],
            link: ["http://php.net/manual/en/intro.stream.php"],
            explanation: []
        }
    },
    q151: {
        id: 151,
        text: 'Which of the following is not a valid <code>fopen()</code> access mode:',
        type: 2,
        category: 5,
        answer: {
            options: ['b', 'x', 'a', 'w', 'r+'],
            correct: [1],
            link: ["http://php.net/manual/en/function.fopen.php"],
            explanation: ["The first option 'b' is an additional flag and not an access mode."]
        }
    },
    q152: {
        id: 152,
        text: 'The _______ constant in a CLI script is an automatically provided file resource representing standard input of the terminal.',
        type: 2,
        category: 5,
        answer: {
            options: ['STDIN', '__STDIN__', 'STDIO', 'PHP::STDIO', 'STD_IN'],
            correct: [1],
            link: ["http://php.net/manual/en/wrappers.php.php"],
            explanation: []
        }
    },
    q153: {
        id: 153,
        text: 'What should go in the ??????? assignment below to create a Zlib-compressed file <code>foo.gz</code> with a compression level of <code>9</code>?\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\n\n$file = \'????????\';\n\n$fr = fopen($file, \'wb9\');\nfwrite($fr, $data);\nfclose($fr);\n?&gt;\n</pre>',
        type: 2,
        category: 5,
        answer: {
            options: ['gzip://foo.gz?level=9', 'compress.zip://foo.gz?level=9', 'compress.zlib://foo.gz', 'compress.gzip://foo.gz?level=9', 'zlib://foo.gz'],
            correct: [3],
            link: ["http://php.net/manual/en/wrappers.compression.php"],
            explanation: ["Compression level already specified in fopen statement 'wb9'."]
        }
    },
    q154: {
        id: 154,
        text: 'Which of the following is not a valid default stream wrapper for PHP 5, assuming OpenSSL is enabled?',
        type: 2,
        category: 5,
        answer: {
            options: ['ftps://', 'ftp://', 'sftp://', 'https://', 'http://'],
            correct: [3],
            link: ["http://www.php.net/manual/en/wrappers.php"],
            explanation: ["PHP supports FTP and FTPS, but does not support SFTP which uses ssh public/private keys."]
        }
    },
    q155: {
        id: 155,
        text: 'When opening a file in writing mode using the FTP handler, what must be done so that the file will still be written to the server in the event it previously exists?',
        type: 2,
        category: 5,
        answer: {
            options: ['Provide a context for fopen() using stream_context_create()', 'You must delete the file first before uploading a new file', 'Configure this behavior in the php.ini file using the ftp.overwrite directive', 'Open the file using the \'w+\' mode'],
            correct: [1],
            link: ["http://php.net/manual/en/context.ftp.php", "http://php.net/manual/en/function.stream-context-create.php"],
            explanation: []
        }
    },
    q156: {
        id: 156,
        text: 'Which of the following functions is used to determine if a given stream is blocking or not?',
        type: 2,
        category: 5,
        answer: {
            options: ['stream_get_blocking', 'stream_get_meta_data', 'stream_is_blocking', 'stream_get_blocking_mode'],
            correct: [2],
            link: ["http://php.net/manual/en/function.stream-get-meta-data.php"],
            explanation: []
        }
    },
    q157: {
        id: 157,
        text: 'What is the difference between the <code>include</code> and <code>require</code> language constructs?',
        type: 2,
        category: 0,
        answer: {
            options: ['Require constructs can\'t be used with URL filenames', 'Include constructs cause a fatal error if the file doesn\'t exist', 'There is no difference other than the name', 'Include constructs are processed at run time; require constructs are processed at compile time', 'Require constructs cause a fatal error if the file can\'t be read'],
            correct: [5],
            link: ["http://php.net/manual/en/function.require.php"],
            explanation: []
        }
    },
    q158: {
        id: 158,
        text: 'When writing CLI scripts it is often useful to access the standard streams available to the operating system such as standard input/output and error. How does one access these streams in PHP 5?',
        type: 2,
        category: 5,
        answer: {
            options: ['Use stdin(), stdout() and stderr() functions', 'PHP::STDIN, PHP::STDOUT, PHP::STDERR class constants in PHP 5', 'STDIN, STDOUT, and STDERR constants in PHP 5', 'use the php::stdin(), php::stdout(), and php::stderr() class methods'],
            correct: [3],
            link: ["http://php.net/manual/en/wrappers.php.php"],
            explanation: []
        }
    },
    q159: {
        id: 159,
        text: 'How can one take advantage of the time waiting for a lock during a stream access, to do other tasks using the following locking code as the base:\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\n$retval = flock($fr, LOCK_EX);\n?&gt;\n</pre>',
        type: 2,
        category: 5,
        answer: {
            options: ['Use flock_lazy() instead of flock()', 'Use LOCK_EX|LOCK_NB instead of LOCK_EX', 'Use LOCK_UN instead of LOCK_EX', 'Check the value of $retval to see if the lock was obtained', 'Check to see if $retval == LOCK_WAIT'],
            correct: [2],
            link: ["http://php.net/manual/en/function.flock.php"],
            explanation: ["Setting the LOCK_NB bitmask tells PHP to set a non-blocking lock on the stream. You can then set up a while() loop to keep trying for a lock and/or carry out other tasks."]
        }
    },
    q160: {
        id: 160,
        text: 'What is the output of?\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\nfunction apple($apples = 4) { \n\t$apples = $apples / 2; \n\treturn $apples;\n}\n\n$apples = 10;\napple($apples);\necho $apples;\n?&gt;\n</pre>',
        type: 2,
        category: 0,
        answer: {
            options: ['2', '4', '5', '10'],
            correct: [4],
            link: ["http://www.php.net/manual/en/functions.returning-values.php"],
            explanation: ["The returning value of the function is ignored."]
        }
    },
    q161: {
        id: 161,
        text: 'Which statement will return the third parameter passed to a function?',
        type: 2,
        category: 0,
        answer: {
            options: ['$argv[3];', '$argv[2];', 'func_get_args(3);', 'func_get_arg(2);', 'func_get_arg(3);'],
            correct: [4],
            link: ["http://php.net/manual/en/function.func-get-arg.php"],
            explanation: []
        }
    },
    q162: {
        id: 162,
        text: 'What is the output of the following code?\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\nfunction oranges(&amp;$oranges = 17) {\n\t$oranges .= 1;\n}\n\n$apples = 5;\noranges($apples);\necho $apples++;\n?&gt;\n</pre>',
        type: 2,
        category: 0,
        answer: {
            options: ['16', '51', '15', '6', '5'],
            correct: [2],
            link: ["http://www.php.net/manual/en/functions.arguments.php", "http://php.net/manual/en/language.operators.increment.php"],
            explanation: ["$apples is passed by reference, then converted to string thanks to type-juggling, concatenated, returned and printed BEFORE the increment."]
        }
    },
    q163: {
        id: 163,
        text: 'What is the output of the following code?\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\nfunction pears(Array $pears) {\n\tif (count($pears) &gt; 0) {\n\t\techo array_pop($pears);\n\t\tpears($pears);\n\t}\n}\n\n$fruit = array("Anjo", "Bartlet");\npears($fruit);\n?&gt;\n</pre>',
        type: 2,
        category: 8,
        answer: {
            options: ['Bartlet', 'Anjo', 'BartletAnjo', 'AnjoBartlet', 'None / There is an Error'],
            correct: [3],
            link: ["http://php.net/manual/en/function.array-pop.php"],
            explanation: ["Using the array as a LIFO stack."]
        }
    },
    q164: {
        id: 164,
        text: 'In PHP5 objects are passed by reference to a function when (Select the answer that is the most correct):',
        type: 2,
        category: 2,
        answer: {
            options: ['Always; objects are passed by reference in PHP5', 'When the calling code preceeds the variable name with a &amp;', 'Never; objects are cloned when passed to a function', 'When the function paramater listing preceeds the variable name with a &amp;'],
            correct: [4],
            link: ["http://www.php.net/manual/en/language.oop5.references.php#101900", "http://php.net/manual/en/language.oop5.references.php"],
            explanation: ["VERY interesting question, you can find the answer ina comment on the provided link. \nPHP5 always uses pass by value by default, but in the case of objects, whats 'copied' is a pointer to the memory location of the object. So, it might seem (because the behaviour is practically the same) that it's always passed by reference."]
        }
    },
    q165: {
        id: 165,
        text: 'What is the output of the following code?\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\nfunction byReference(&amp;$variable = 5) { \n\techo ++$variable;\n}\n\nbyReference();\n?&gt;\n</pre>',
        type: 2,
        category: 0,
        answer: {
            options: ['No output or error. Variables can not be optional and passed by reference.', '5', '6', 'An error will be thrown.'],
            correct: [3],
            link: ["http://php.net/manual/en/language.operators.increment.php"],
            explanation: ["PHP 5 supports giving referenced variables a default value, the increment will be done previous to the print."]
        }
    },
    q166: {
        id: 166,
        text: 'What is the output of the following code?\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\nfunction x10(&amp;$number) \n\t$number *= 10;\n$count = 5;\nx10($count);\necho $count;\n?&gt;\n</pre>',
        type: 2,
        category: 0,
        answer: {
            options: ['Error: Unexpected T_VARIABLE', '10', 'Notice regarding pass by reference', '50', '5'],
            correct: [1],
            link: ["http://www.tizag.com/phpT/phpfunctions.php"],
            explanation: ["The function is missing it's curly braces."]
        }
    },
    q167: {
        id: 167,
        text: 'What is the output of the following?\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\nfunction 1dotEach($n) { \n\tif ($n &gt; 0) { \n\t\t1dotEach(--$n); \n\t\techo "."; \n\t}\n\telse { \n\t\treturn $n; \n\t}\n}\n\n1dotEach(4);\n?&gt;\n</pre>',
        type: 2,
        category: 0,
        answer: {
            options: ['...0', 'Parse Error: Syntax Error', '.....', '....', '...'],
            correct: [2],
            link: ["http://www.tizag.com/phpT/phpfunctions.php"],
            explanation: ["Function names cannot start with a number."]
        }
    },
    q168: {
        id: 168,
        text: 'When your error reporting level includes <code>E_STRICT</code>, what will the output of the following code be?\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\nfunction optionalParam($x = 1, $y = 5, $z) { \n\tif ((!$z &gt; 0)) { \n\t\t$z = 1; \n\t} \n\n\tfor($count = $x; $count &lt; $y; $count+= $z) { \n\t\techo "#"; \n\t}\n}\n\noptionalParam(2,4,2);\n?&gt;\n</pre>',
        type: 2,
        category: 0,
        answer: {
            options: ['##', 'Notice', 'Warning', 'Syntax Error', '#'],
            correct: [5],
            link: ["http://php.net/manual/en/language.operators.arithmetic.php"],
            explanation: ["PHP will allow a function to have 'invalid' default values (i.e. func a( x=1, y=2, z); an error will only be thrown if a caller of the function leaves a parameter out (i.e. $result = a(1, 2))."]
        }
    },
    q169: {
        id: 169,
        text: 'What is the output of the following?\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\nfunction byRef(&amp;$number) { \n\t$number *= 10; \n\treturn ($number - 5);\n}\n\n$number = 10;\n$number = byRef($number);\necho $number;\n?&gt;\n</pre>',
        type: 2,
        category: 0,
        answer: {
            options: ['50', '5', '95', '10', '100'],
            correct: [3],
            link: ["http://php.net/manual/en/language.references.pass.php"],
            explanation: []
        }
    },
    q170: {
        id: 170,
        text: 'What is the output of the following?\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\nfunction byRef(&amp;$apples) { \n\t$apples++;\n}\n\n$oranges = 5;\n$apples = 5;\nbyRef($oranges);\necho "I have $apples apples and $oranges oranges";\n?&gt;\n</pre>',
        type: 2,
        category: 0,
        answer: {
            options: ['I have 6 apples and 6 oranges', 'I have 6 apples and 5 oranges', 'I have 5 apples and 6 oranges', 'I have 5 apples and 5 oranges'],
            correct: [3],
            link: ["http://php.net/manual/en/language.references.pass.php"],
            explanation: []
        }
    },
    q171: {
        id: 171,
        text: 'What is the output of the following?\n\n<pre class=\'brush: php; html-script: true\'>\n&lt;?php\nfunction a($number) { \n\treturn (b($number) * $number);\n}\n\nfunction b(&amp;$number) { \n\t++$number;\n}\n\necho a(5);\n?&gt;\n</pre>',
        type: 2,
        category: 0,
        answer: {
            options: ['0', '36', '6', '30', '5'],
            correct: [1],
            link: ["http://www.php.net/manual/en/functions.returning-values.php"],
            explanation: ["The answer is 0 as function b is taking variable by reference and return nothing or null , which is converted to 0 (type juggling)."]
        }
    },
    q172: {
        id: 172,
        text: 'The ____ pattern is extremely useful for creating objects which watch the state of other objects and respond to those changes.',
        type: 1,
        category: 2,
        answer: {
            options: [],
            correct: ["observer"],
            link: ["http://www.sitepoint.com/understanding-the-observer-pattern/", "http://labelmedia.co.uk/blog/php-design-patterns-observer-pattern.html"],
            explanation: ["The observer pattern define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically."]
        }
    },
    q173: {
        id: 173,
        text: 'The _____ pattern ensure that only one instance of a class is created.',
        type: 1,
        category: 2,
        answer: {
            options: [],
            correct: ["singleton"],
            link: ["http://phpadvocate.com/blog/2011/04/php-using-a-singleton-pattern-with-oop/"],
            explanation: ["the singleton pattern ensure that only one instance of a class is created and Provide a global access point to the object."]
        }
    },
    q174: {
        id: 174,
        text: 'What will be printed?\n\n<pre class="brush: php">\n&lt;?php\n$a = 100;\n\nfunction a($b = 1) {\n\t$a = 0;\n\tglobal $a;\n\treturn $a / 10 * $b;\n}\n\necho a(A());\n?&gt;\n</pre>',
        type: 2,
        category: 0,
        answer: {
            options: ['10', '0', '100', '1000', 'Will throw an error', 'None of the above'],
            correct: [3],
            link: [],
            explanation: ["What's important to notice in this question is that $a = 0 prior to it's 'globalization' doesn't have any effect on the global variable (declared global by virtue of being outside any function). \nAlso, function names in PHP are case insensitive."]
        }
    },
    q175: {
        id: 175,
        text: 'What will be printed when this script is executed?\n\n<pre class="brush: php">\n&lt;?php\nclass Test {\n\tprotected $count = 0;\n\n\tfunction construct() {\n\t\techo $this->count;\n\t}\n\n\tfunction test() {\n\t\t$this->count++;\n\t}\n\n\tfunction show() {\n\t\techo $this->count;\n\t}\n}\n\n$testObj = new Test();\n$testObj->test();\n$testObj->show();\n?&gt;\n</pre>',
        type: 2,
        category: 2,
        answer: {
            options: ['01', '00', '0', '1', '2', '11', 'An error will be thrown'],
            correct: [5],
            link: [],
            explanation: ["This is another tricky question. The constructor function is not a real constructor: __constructor(), and as such, the test() function will be called twice: one as the constructor and another for the $testObj->test()."]
        }
    },
    q176: {
        id: 176,
        text: 'If we want to add an actor "You" to the movie, what would be the correct instruction?\n\n<pre class="brush: php">\n&lt;?php\n$xmlStr = &lt;&lt;&lt;XML\n&lt;?xml version=\'1.0\'?&gt;\n&lt;movie&gt;\n\t&lt;title&gt;PHP Exam: The Saga&lt;/title&gt;\n\t&lt;actor&gt;Me&lt;/actor&gt;\n&lt;/movie&gt;\nXML;\n\n$xmlObj = simplexml_load_string($xmlStr);\n\n??????????????\n\necho $xmlObj->asXML();\n?&gt\n</pre>',
        type: 2,
        category: 4,
        answer: {
            options: ['$xmlObj->movie->addChild("actor", "You");', '$xmlObj->addChild(new SimpleXMLElement("actor", "You"))', '$xmlObj->movie[0]->addChild("actor", "You")', '$xmlObj->xpath(new SimpleXMLElement("actor", "You"))', '$xmlObj->addChild("actor", "You")', '$xmlObj->movie[0]->addChild(new SimpleXMLElement("actor", "You"))'],
            correct: [5],
            link: ["http://php.net/manual/en/simplexmlelement.addchild.php"],
            explanation: []
        }
    },
    q177: {
        id: 177,
        text: 'What will print the following script?\n\n<pre class="brush: php">\n&lt;?php\n$a = 2;\n$b = 10;\n$c = 1;\n\nfunction test(&$a, $c = 0) {\n\tglobal $c;\n\t$a = $a &lt;&lt; 2 + $c;\n}\n\ntest($b);\necho $a.$b;\n?&gt;\n</pre>',
        type: 1,
        category: 0,
        answer: {
            options: [],
            correct: ["280"],
            link: ["http://www.php.net/manual/en/language.operators.precedence.php"],
            explanation: ["There are two things to keep in mind with this question: first the operators precedence (addition will be done before bitwise), second to keep your eyes open (even if the function varible is called $a, we are passing $b by reference)."]
        }
    },
    q178: {
        id: 178,
        text: 'Which ones are accepted callbacks?',
        type: 3,
        category: 0,
        answer: {
            options: ['call_user_func(my_callback_function())',
                'call_user_func("my_callback_function")',
                'call_user_func("my_callback_function", $arguments)',
                'call_user_func(array("MyClass", "myCallbackMethod"))',
                'call_user_func(array("my_callback_function", $arguments))',
                'call_user_func(array("MyClass", "my_callback_function", $arguments))',
                'call_user_func("MyClass::myCallbackMethod")',
                'call_user_func(function() { ... })',
                'A closure'
            ],
            correct: [2, 4, 7, 8, 9],
            link: ["http://php.net/manual/en/language.types.callable.php"],
            explanation: []
        }
    },
    q179: {
        id: 179,
        text: 'How would we parse an HTML file using an XML parser?',
        type: 3,
        category: 4,
        answer: {
            options: ['We can\'t parse an HTML using an XML parser, because the document might be not well-formed.', 'DOMDocument::loadHTMLFile(\'filename.html\')', 'DOMDocument::loadFromHTML(htmlentities(file_get_contents(\'filename.html\')))', 'simple_xml_load_html(\'filename.html\')', 'DOMDocument::loadHTML(file_get_contents(\'filename.html\'))', 'new SimpleXMLElement(file_get_contents(\'filename.html\'))', 'We can\'t parse an HTML using an XML parser, because of the DTD.'],
            correct: [2, 5],
            link: ["http://php.net/manual/en/domdocument.loadhtml.php"],
            explanation: []
        }
    },
    q180: {
        id: 180,
        text: 'What would be the output of the following code?\n\n<pre class="brush: php">\n&lt;?php\n$a = array("animal" => "dog", "flower" => "edelweiss", "color" => "purple", "house");\n$b = array("animal" => "dog", "rose", "rain");\n\n$result = array_diff_assoc($a, $b);\n\nforeach ($result as $r) {\n\techo $r;\n}\n?&gt;\n</pre>',
        type: 2,
        category: 8,
        answer: {
            options: ['edelweisspurplehouse', 'edelweisspurplehouserain', 'edelweisspurple', 'dog', 'edelweisspurplehouseroserain', 'Nothing', 'Will show an error'],
            correct: [1],
            link: ["http://www.php.net/manual/en/function.array-diff-assoc.php"],
            explanation: []
        }
    },
    q181: {
        id: 181,
        text: 'Which of the following affirmations about array_splice() are NOT correct?',
        type: 3,
        category: 8,
        answer: {
            options: ['The first parameter is the input array and is taken by reference', 'The $offset can\'t be negative', 'Returns false if there was an error or true otherwise', 'If $length is omitted, it will take the length of the replacements array', 'It does return the sliced elements', 'If the replacements are provided as a non-array, the parameter will be typecast to one', 'Numeric key  for the $input are not preserved'],
            correct: [2, 3, 4],
            link: ["http://www.php.net/manual/en/function.array-splice.php"],
            explanation: []
        }
    },
    q182: {
        id: 182,
        text: 'What is the output of the following code?\n\n<pre class="brush: php">\n&lt;?php\n$pattern = \'/[a-z0-9]{4}/i\';\n$string = \'PHP5 Rocks!\';\n$matches = preg_match($pattern, $string);\n\nprint_r($matches);\n?&gt;\n</pre>',
        type: 1,
        category: 6,
        answer: {
            options: [],
            correct: ["1"],
            link: ["http://www.php.net/preg_match"],
            explanation: ["This question is a trap. The function preg_match() returns '1' if it found any matches and '0' otherwise."]
        }
    },
    q183: {
        id: 183,
        text: 'Which of the following are NOT valid PDOStatement::fetch flags?',
        type: 2,
        category: 7,
        answer: {
            options: ['PDO::FETCH_ASSOC', 'PDO::FETCH_ROW', 'PDO::FETCH_OBJ', 'PDO::FETCH_EXT', 'PDO::FETCH_BOTH', 'PDO::FETCH_CLASS'],
            correct: [2, 4],
            link: ["http://www.php.net/manual/en/pdostatement.fetch.php"],
            explanation: [  ]
        }
    },
    q184: {
        id: 184,
        text: 'Which HTTP status code informs of a redirection?',
        type: 2,
        category: 1,
        answer: {
            options: ['201', '404', '401', '100', '500', '302'],
            correct: [6],
            link: ["http://en.wikipedia.org/wiki/List_of_HTTP_status_codes"],
            explanation: ["The 401 status code means 'Not Authorised', so the user will be asked to identify themselves."]
        }
    },
    q185: {
        id: 185,
        text: 'What is the output of the following code?\n\n<pre class="brush: php">\n&lt;?php\n$pattern = "# \\w*(?![0-9]{1}) (\\w+)#";\n$string = "PHP5 released PHP6 not released";\n\npreg_match_all($pattern, $string, $matches);\n    \nprint_r($matches[1]);\n?&gt;\n</pre>',
        type: 2,
        category: 6,
        answer: {
            options: ['An array containing: PHP5', 'An array containing: PHP6', 'An array containing: PHP5 and PHP6', 'An array containing: PHP6 and released', 'An array containing: released, not and released', 'An array containing: released, PHP6, not and released'],
            correct: [4],
            link: ["http://php.net/manual/en/function.preg-match.php"],
            explanation: ["The regex contains a negative look-ahead, also be careful with the first white space, as it is part of the match."]
        }
    },
    q186: {
        id: 186,
        text: 'What is the output of the following code?\n\n<pre class="brush: php">\n&lt;?php\nob_start();\n\necho "PHP";\n\n$ob1 = ob_get_contents();\n\necho 5;    \n    \n$ob2 = ob_get_clean();\n    \nob_flush();\n\necho strrev($ob1.$ob2);\n?&gt;\n</pre>',
        type: 1,
        category: 0,
        answer: {
            options: [],
            correct: ["5PHPPHP"],
            link: ["http://www.php.net/manual/en/function.ob-flush.php", "http://www.php.net/manual/en/function.ob-start.php", "http://www.php.net/manual/en/function.ob-get-clean.php"],
            explanation: ["We turn on output buffering, put 'dreaming' into it, then grab the contents of the output buffer – but we haven't destroyed it.  So when we echo strlen('dreaming'), an 8 goes into the output buffer as well, and then we flush it."]
        }
    },
    q187: {
        id: 187,
        text: 'What is the output of the following code?\n\n<pre class="brush: php">\n&lt;?php\n$pattern = \'#[a-z]{4,5}#i\';\n$string = \'Do you Ever thought PHP5 rocks?\';\npreg_match($pattern, $string, $matches);\n\nforeach ($matches as $m) {\n\techo $m;\n};\n?&gt;\n</pre>',
        type: 1,
        category: 6,
        answer: {
            options: [],
            correct: ["Ever"],
            link: ["http://www.php.net/manual/en/function.preg-match.php"],
            explanation: ["The 'i' atthe end of the pattern makes the search case-insensitive."]
        }
    },
    q188: {
        id: 188,
        text: 'What does status 401 and status 403 indicate',
        type: 2,
        category: 1,
        answer: {
            options: ['Not Found & Bad Request', 'Not Found & Forbidden', 'Unauthorized & Bar Request', 'Request Timeout & Internal Server Error', 'Unauthorized & Forbidden', 'Bad Request & Service Unavailable'],
            correct: [5],
            link: ["http://en.wikipedia.org/wiki/List_of_HTTP_status_codes"],
            explanation: []
        }
    },
    q189: {
        id: 189,
        text: 'What will be printed?\n\n<pre class="brush: php">\n&lt;?php\necho (013 + 7 + 0x70) - bindec(\'010000000\');\n?&gt;\n</pre>',
        type: 2,
        category: 0,
        answer: {
            options: ['-2', '-1', '0', '1', '2', '129', '130', 'An error will be printed'],
            correct: [5],
            link: [],
            explanation: ["013 is octal for 11, 0x70 is hexadecimal for 112, bindec() translates a binary to decimal and 010000000 is binary for 128."]
        }
    },
    q190: {
        id: 190,
        text: 'What would we use to create an array with the values of three other arrays?',
        type: 2,
        category: 8,
        answer: {
            options: ['shuffle()', 'array_intersect()', 'array_merge()', 'list()', 'implode()', 'array_combine()', 'array_splice()'],
            correct: [3],
            link: ["http://php.net/manual/en/function.array-merge.php"],
            explanation: []
        }
    },
    q191: {
        id: 191,
        text: 'Which of the following instructions would read the following file correctly?\n\n<pre class="brush: php"> \njavier\targonaut\tpe\nhiroshi\tsculptor\tjp\nrobert\tslacker\tus\nluigi\tflorist\tit\n</pre>',
        type: 2,
        category: 5,
        answer: {
            options: ['$userinfo = fscanf($handle, ":name :profession :lang")', '$userinfo = fscanf($handle, "%s\\t%s\\t%s\\n")', '$userinfo = fscanf($handle, "^%s[ ]+%s[ ]+%s\$")', '$userinfo = sscanf($handle, "%s %s %s")', '$userinfo = fscanf($handle, "%s %s %s")', 'None of the above'],
            correct: [2],
            link: ["http://www.php.net/manual/en/function.fscanf.php"],
            explanation: []
        }
    },
    q192: {
        id: 192,
        text: 'If we are in the namespace \'approot\' and want to use the function test() that is in the namespace \'approot\\core\\test\', what should we use?',
        type: 2,
        category: 0,
        answer: {
            options: ['We can access the function without any further change because we have access to all namespaces below "approot"', 'use test', 'use core\\test', 'use approot\\core\\test', 'use core::test::test()', 'We can\'t change the namespace once we have specified one'],
            correct: [4],
            link: ["http://php.net/manual/en/language.namespaces.php"],
            explanation: []
        }
    },
    q193: {
        id: 193,
        text: 'Which of the following are configuration settings for PHP?',
        type: 3,
        category: 0,
        answer: {
            options: ['mysqli.allow_persistent', 'session.permanent_cache', 'error_reporting_enabled', 'allow_open_url', 'allow_url_include', 'set_base_dir', 'max_file_downloads', 'extension'],
            correct: [1, 5, 8],
            link: ["http://www.php.net/manual/en/ini.list.php"],
            explanation: []
        }
    },
    q194: {
        id: 194,
        text: 'What will the following code print?\n\n<pre class="brush: php">\n&lt;php&gt;\nfunction fibo($a, $b, $step) {\n\tif ($step > 0) {\n\t--$step;\n\treturn fibo($b, $a + $b, $step);\n\t}\n\telse {\n\treturn $b;\n\t}\n}\n\necho fibo(0, 1, 5);\n&lt;/php&gt;\n</pre>\n',
        type: 2,
        category: 0,
        answer: {
            options: ['0', '1', '3', '5', '8', 'It will print an error', 'None of the above'],
            correct: [7],
            link: ["http://php.net/manual/en/language.basic-syntax.phptags.php"],
            explanation: ["The &lt;php&gt; are not accepted PHP opening tags."]
        }
    },
    q195: {
        id: 195,
        text: 'What do we use the XSL extension for?',
        type: 2,
        category: 4,
        answer: {
            options: ['To validate XML using WCAG rules', 'For XML transformations', 'To generate XML from a CSV file', 'To apply CSS to an XML in order to generate an XHTML page'],
            correct: [2],
            link: ["http://php.net/manual/en/book.xsl.php"],
            explanation: []
        }
    },
    q196: {
        id: 196,
        text: 'What would the output of the following code be the first time it is executed?\n\n<pre class="brush: php">\n&lt;?php\ndefine(\'MaxTries\', 5); \nsession_start();\n\t\nif (!empty($_SESSION["num_tries"])) {\n\tif ($_SESSION["num_tries"] > maxTries) {\n\t\techo "Sorry, just reached your limit!";\n\t\tdie();\n\t}\n	$_SESSION["num_tries"]++;\n}\nelse {\n\t$_SESSION["num_tries"] = 1;\n}\necho "You tried: {$_SESSION["num_tries"]} time/s"; \n?&gt;\n</pre>',
        type: 2,
        category: 0,
        answer: {
            options: ['Sorry, just reached your limit!', 'You tried: 0 time/s', 'You tried: 1 time/s', 'An error', 'A notice followed by: You tried: 0 time/s', 'A notice followed by: Sorry, just reached your limit!'],
            correct: [6],
            link: ["http://php.net/manual/en/language.constants.php"],
            explanation: ["Constants are case-sensitive in PHP, when it doesn't find 'maxTries', PHP throws a notices and assumes maxTries to be a constant  with value 'maxTries'"]
        }
    },
    q197: {
        id: 197,
        text: 'Which are valid variable names?',
        type: 3,
        category: 0,
        answer: {
            options: ['$Castor', '$_polluX', '$_3cygnus', '$dorado-8', '$_c_e_n_t_a_u_r_i', '$vega_99_', '$x88', '$088'],
            correct: [1, 2, 5, 6, 7],
            link: ["http://php.net/manual/en/language.variables.basics.php"],
            explanation: []
        }
    },
    q198: {
        id: 198,
        text: 'What will be printed when we execute this script?\n\n<pre class="brush: php">\n&lt;?php\n$var = 10;    \n$format = "%.2f === %o";    \n\n$s = printf($format, $var, $var);\necho $s;\n?&gt;\n</pre>',
        type: 2,
        category: 6,
        answer: {
            options: ['true', 'false', '10.00 === 1212', '10.00 === 12', '10.0 === 10', 'An error'],
            correct: [3],
            link: ["http://php.net/manual/en/function.printf.php", "http://php.net/manual/en/function.sprintf.php", "http://en.wikipedia.org/wiki/Printf_format_string"],
            explanation: ["Besides string formatting, there is a small trap hidden in this code. \nThe function printf() automatically printf the string and returns an integer with the length of the printed string."]
        }
    },
    q199: {
        id: 199,
        text: 'What will the output of the following code be? (type the error level if you think it will show one)\n\n<pre class="brush: php">\n&lt;?php\n$a = array(\n\t5 => 6,\n\t5,\n\t"5" => 7,\n\t"6" => 6);\n\nforeach ($a as $val) {\n\techo $val;\n}\n?&gt;\n</pre>',
        type: 1,
        category: 8,
        answer: {
            options: [],
            correct: ["76"],
            link: ["http://php.net/manual/en/language.types.array.php"],
            explanation: ["The two first elements of the array are overwritten by the second pair."]
        }
    },
    q200: {
        id: 200,
        text: 'Which function tests for end-of-file on a file pointer? (write the name without parenthesis nor parameters)',
        type: 1,
        category: 5,
        answer: {
            options: [],
            correct: ['feof'],
            link: ["http://php.net/manual/en/function.feof.php"],
            explanation: []
        }
    },
    q201: {
        id: 201,
        text: 'What would be the value of $a when printing it? (leave the answer empty if you think $a will never be printed)\n\n<pre class="brush: php">\n&lt;?php\n$a = array();\n\nfunction flip($a) {\n\treturn array_flip( array(1, 0, 1.5, 010) );\n}\n\n$a = implode( @flip($a), \'\' );\n\necho $a;\n?&gt;\n</pre>',
        type: 1,
        category: 8,
        answer: {
            options: [],
            correct: ["013"],
            link: ["http://php.net/manual/en/function.array-flip.php", "http://php.net/manual/en/function.implode.php"],
            explanation: ["array_flip switches keys and values of the array, but those values than can't be converted to keys (only string and integers can) are excluded."]
        }
    },
    q202: {
        id: 202,
        text: 'What would happen if we used fwrite() on a read-only file?',
        type: 2,
        category: 5,
        answer: {
            options: ['A warning', 'A notice', 'A fatal error', 'We can\'t write the file and 0 is returned', 'We can\'t write the file and FALSE is returned', 'We overwrite the file and the offset is returned', 'We append to the file and the number of bytes written is returned'],
            correct: [5],
            link: ["http://php.net/manual/en/function.fwrite.php"],
            explanation: []
        }
    },
    q203: {
        id: 203,
        text: 'Which of the following wrappers are NOT supported by PHP?',
        type: 3,
        category: 5,
        answer: {
            options: ['php://fd', 'php://system', 'php://input', 'php://memory', 'php://error', 'php://tty', 'php://log', 'php://stdin'],
            correct: [2, 6, 7],
            link: ["http://www.php.net/manual/en/wrappers.php.php"],
            explanation: []
        }
    },
    q204: {
        id: 204,
        text: 'The registry pattern characteristics are:',
        type: 3,
        category: 2,
        answer: {
            options: ['It always makes use of .ini files', 'It implements the singleton pattern', 'Can provide access to different sort of objects', 'It does manage your database pooling', 'Almost always it\'s stored in the session'],
            correct: [2, 3],
            link: ["http://avedo.net/101/the-registry-pattern-and-php/"],
            explanation: []
        }
    },
    q205: {
        id: 205,
        text: 'Will the following code print an error?\n\n<pre class="brush: php">\n&lt;?php\nclass A {\n\tpublic static function test() {\n\t\techo "ok!";\n\t}\n}\n\n(new A())->test();\n?&gt;\n</pre>',
        type: 2,
        category: 2,
        answer: {
            options: ['Yes, you have to call a static method using ::', 'Yes, you method access on instantiation is not available in PHP 5.3', 'No, it will throw an exception instead', 'No, this code works flawlessly'],
            correct: [2],
            link: ["http://php.net/manual/en/language.oop5.static.php"],
            explanation: ["Static method can be called both using :: and -> (if the class have been instantiated). \nMethod access on instantiation is available since PHP 5.4, so it's not included in PHP 5.3 certification exam."]
        }
    },
    q206: {
        id: 206,
        text: 'What will be the output of this script?\n\n<pre class="brush: php">\n&lt;?php\nfunction desc($a, $b) {\n\treturn ($b-$a);\n}\n\n$array = array(1,2,3,5);\n$a = usort($array, \'desc\');\n\nprint_r($a);\n?&gt;\n</pre>',
        type: 2,
        category: 8,
        answer: {
            options: ['1', '0', 'Array ( [0] => 5 [1] => 3 [2] => 2 [3] => 1 )', 'Array ( [3] => 5 [2] => 3 [1] => 2 [0] => 1 )', 'Array ( [0] => 1 [1] => 2 [2] => 3 [3] => 5 )', 'Array ( [5] => 0 [3] => 1 [2] => 2 [1] => 3 )', 'None of the above'],
            correct: [1],
            link: ["http://www.php.net/usort"],
            explanation: ["usort() returns TRUE on success or FALSE on failure"]
        }
    },
    q207: {
        id: 207,
        text: 'What are the uses of the keyword "final"?',
        type: 3,
        category: 2,
        answer: {
            options: ['Prevent class inheritance', 'Prevent method overriding or redefinition of method in subclass', 'Declare class constants', 'All the above'],
            correct: [1, 2],
            link: ["http://www.php.net/manual/en/language.oop5.final.php"],
            explanation: ["Contrary to what happens in Java, the keyword final does not define constants in classes."]
        }
    },
    q208: {
        id: 208,
        text: 'What will be the output of this script?\n\n<pre class="brush: php">\n&lt;?php\nclass A {\n\tfinal function a() {\n\t\techo 1;\n\t}\n}\n\nclass B extends A {\n\tpublic function a() {\n\t\techo 2;\n\t}\n}\n\n$a = new B();\necho $a->a();\n?&gt;\n</pre>',
        type: 2,
        category: 2,
        answer: {
            options: ['2', '12', '22', 'Fatal error', 'None of the above'],
            correct: [4],
            link: ["http://php.net/manual/en/language.oop5.final.php"],
            explanation: ["The final keyword in the parent method prevents any overwriting by it's child."]
        }
    },
    q209: {
        id: 209,
        text: 'What is the default expiration of a cookie? (PHP)',
        type: 2,
        category: 1,
        answer: {
            options: ['It will not expired until destroyed', '10 min', 'Until the browser is closed', '1 day', 'Until the page is edited', '1 year'],
            correct: [3],
            link: ["http://php.net/manual/en/function.setcookie.php"],
            explanation: []
        }
    },
    q210: {
        id: 210,
        text: 'If the "action" property of a FORM is empty, where would that FORM lead to?',
        type: 2,
        category: 1,
        answer: {
            options: ['Nowhere, it will not submit', 'index.php', 'To same URI from where the FORM is submitted', 'The established default page of the current URI level', 'The established default page of server root level'],
            correct: [3],
            link: ["http://www.thefutureoftheweb.com/blog/use-empty-form-action-submit-to-current"],
            explanation: []
        }
    },
    q211: {
        id: 211,
        text: 'Which of the following instructions format the PHP errors as HTML?',
        type: 2,
        category: 1,
        answer: {
            options: ['html_errors = 1', 'php_html_errors = 1', 'error_format_html = 1', 'error_format = "html"', 'error.format_html'],
            correct: [1],
            link: ["http://php.net/manual/en/errorfunc.configuration.php"],
            explanation: []
        }
    },
    q212: {
        id: 212,
        text: 'What will this script print when executed?\n\n<pre class="brush: php">\n&lt;?php\n$a = \'PHP\';\n\nfunction a($a) {\n\t$b = 4;\n\t$a .= $a." ".(++$b).\'.3\';\n}\n\necho $a;\n&gt;\n</pre>',
        type: 1,
        category: 0,
        answer: {
            options: [],
            correct: ["PHP"],
            link: [],
            explanation: ["This question is a trap, we never call the function a()"]
        }
    },
    q213: {
        id: 213,
        text: 'In HTTP Basic Authentication, what algorithm is applied to the password to protect it?',
        type: 2,
        category: 1,
        answer: {
            options: ['md5', 'sha1', 'RSA', 'none', 'NSA'],
            correct: [4],
            link: ["http://en.wikipedia.org/wiki/Basic_access_authentication"],
            explanation: []
        }
    },
    q214: {
        id: 214,
        text: 'Which function can we use to see if a SOAP call have failed?',
        type: 2,
        category: 5,
        answer: {
            options: ['soap_last_error', 'is_soap_fault', 'get_soap_last_error', 'SoapFault::getError', 'None of the above'],
            correct: [2],
            link: ["http://php.net/manual/en/function.is-soap-fault.php"],
            explanation: []
        }
    },
    q215: {
        id: 215,
        text: 'What will be the output of this script?\n\n<pre class="brush: php">\n&lt;?php\n$id = "id123";\n\t\nfunction printName($id) {\n\t$key = 0;\n\t$names = array(0 => "Anna", 123 => "John", "id" => "Sammy");\n\t\n\tif (strcasecmp($id, "ID123")) {\n\t\t$key = (int) $id; \n\t}\n\telseif (strcmp($id, "ID123")) {\n\t\t$key = "id";\n\t}\n\t\n\tprint $names[$key];\n}\n\nprintName($id);\n?&gt;\n</pre>',
        type: 1,
        category: 6,
        answer: {
            options: [],
            correct: ["Sammy"],
            link: ["http://www.php.net/manual/en/function.strcmp.php", "http://www.php.net/manual/en/function.strcasecmp.php"],
            explanation: ["The function strcmp and strcasecmp does not return true or false on comparison. If both strings are equal, strcasecmp returns 0 which by type-juggling translates to false."]
        }
    },
    q216: {
        id: 216,
        text: 'Using which function is the simplest way to retrieve the information of this user?\n\n<pre class="brush: php">\n&lt;?php\n$data = \'O:8:"stdClass":2:{s:2:"id";i:123;s:4:"info";a:2:{s:4:"name";s:5:"James";s:7:"surname";s:5:"Smith";}}\';\n?&gt;\n</pre>\n',
        type: 2,
        category: 0,
        answer: {
            options: ['json_decode', 'strtok', 'json_encode', 'sscanf', 'unserialize'],
            correct: [5],
            link: ["http://php.net/manual/en/function.unserialize.php"],
            explanation: []
        }
    },
    q217: {
        id: 217,
        text: 'What\'s the name of the error level constant that identifies fatal run-time errors?',
        type: 1,
        category: 0,
        answer: {
            options: [],
            correct: ["E_ERROR"],
            link: ["http://php.net/manual/en/errorfunc.constants.php"],
            explanation: []
        }
    },
    q218: {
        id: 218,
        text: 'Which of the following affirmations about REST design standard are TRUE?',
        type: 3,
        category: 5,
        answer: {
            options: ['Only returns JSON', 'Uses only HTTP', 'Stateless', 'Exposes URIs', 'Accepted headers varies from v1.1 to v1.2', 'Only accepts GET, POST and DELETE'],
            correct: [2, 3, 4],
            link: [],
            explanation: []
        }
    },
    q219: {
        id: 219,
        text: 'Which of the following are valid DateTime constants?',
        type: 3,
        category: 4,
        answer: {
            options: ['ATOM', 'ISO8601', 'LOCALE', 'COOKIE', 'ISO8859-1', 'UTF8'],
            correct: [1, 2, 4],
            link: ["http://php.net/manual/en/class.datetime.php"],
            explanation: []
        }
    },
    q220: {
        id: 220,
        text: 'What will be printed when this script is executed?\n\n<pre class="brush: php">\n&lt;?php\n$s1 = "PHP is quite difficult";\n$s2 = "PHP is also quite fun";\n\nif (str_word_count($s2) > similar_text($s1, $s2)) {\n\techo levenshtein(ucfirst($s1), ucfirst($s2));\n}\nelse {\n\techo count(array_intersect(explode(" ", $s1), explode(" ", $s2)));\n}\n?&gt;\n</pre>',
        type: 1,
        category: 6,
        answer: {
            options: [],
            correct: ["3"],
            link: ["http://php.net/manual/en/function.similar-text.php", "http://www.php.net/manual/en/function.levenshtein.php", "http://php.net/manual/en/function.str-word-count.php", "http://php.net/manual/en/function.array-intersect.php"],
            explanation: []
        }
    },
    q221: {
        id: 221,
        text: 'Which sets of functions would we use to validate data from a FORM?',
        type: 3,
        category: 1,
        answer: {
            options: ['PDOStatement::*', 'addslashes', 'is_*', 'preg_match', 'ctype_*', 'filter_*'],
            correct: [4, 5, 6],
            link: ["http://php.net/manual/en/book.ctype.php", "http://php.net/manual/en/book.filter.php", "http://www.php.net/manual/en/function.preg-match.php"],
            explanation: []
        }
    },
    q222: {
        id: 222,
        text: 'What will be the output?\n\n<pre class="brush: php">\n&lt;?php\n$str = "PHP 5.3 &ccedil;&acirc;";\necho strlen(utf8_encode($str));\n?&gt;\n</pre>',
        type: 2,
        category: 6,
        answer: {
            options: ['0', '8', '10', '16', '40', 'None of the above'],
            correct: [4],
            link: ["http://php.net/manual/en/function.utf8-encode.php", "http://php.net/manual/en/function.strlen.php"],
            explanation: ["Each non-ascii (utf8) character counts as 4 bytes (&ccedil; and &acirc; are both non-ascii). Obviously, white space also count as valid characters."]
        }
    },
    q223: {
        id: 223,
        text: 'What kind of copy does "clone" create?',
        type: 2,
        category: 2,
        answer: {
            options: ['Shallow', 'Deep'],
            correct: [1],
            link: ["http://php.net/manual/en/language.oop5.cloning.php"],
            explanation: ["By default clone makes a shallow copy, making all references in the new object point to the same place as the original one."]
        }
    },
    q224: {
        id: 224,
        text: 'We want to get the content of a web page protected with HTTP Basic Authorization, what\'s wrong with the following code?\n\n<pre class="brush: php">\n&lt;?php\n// Assume $url, $username and $password are defined and valid\n$params = array(\n\t\'http\' => array(\n\t\t\'method\' => \'GET\',\n\t\t\'header\' => \'Authorization: Basic \'.base64_encode($username).\':\'.base64_encode($password)\n\t) \n);\n$stream = stream_context_create($params);\n\n$str = file_get_contents($url, false, $stream);\n?&gt;\n</pre>',
        type: 2,
        category: 5,
        answer: {
            options: ['You can\'t use a context with file_get_contents', 'You can\'t use a stream for basic authentication, you should use curl', 'The second parameter (false) in file_get_contents will invalidate the call', 'There is nothing wrong with this code'],
            correct: [4],
            link: ["http://php.net/manual/en/function.stream-context-create.php", "http://php.net/manual/en/function.file-get-contents.php"],
            explanation: []
        }
    },
    q225: {
        id: 225,
        text: 'What are the recommended settings for production environments?',
        type: 3,
        category: 3,
        answer: {
            options: ['display_errors = off', 'log_errors = on', 'allow_url_include = on', 'error_reporting = E_ALL | E_NOTICE | E_STRICT | E_DEPRECATED', 'error_reporting = E_ALL | E_STRICT'],
            correct: [1, 2, 5],
            link: ["http://www.php.net/manual/en/ini.list.php"],
            explanation: []
        }
    },
    q226: {
        id: 226,
        text: 'What can you do to prevent session fixation?',
        type: 2,
        category: 3,
        answer: {
            options: ['set session.use_only_cookies to on', 'forbid the use of cookies', 'set html_errors to off', 'set exit_on_timeout to on', 'set session.use_trans_sid to on'],
            correct: [1],
            link: ["http://stackoverflow.com/questions/5081025/php-session-fixation-hijacking", "http://php.net/manual/en/session.security.php"],
            explanation: []
        }
    },
    q227: {
        id: 227,
        text: 'What would be the output of the following script?\n\n<pre class="brush: php">\n&lt;?php\ninterface i1 {}\ninterface i2 extends i1 {}\ninterface i3 {}\nclass c1 {}\nclass c2 extends c1 {}\nclass c3 extends c2 implements i2, i3 {}\n\n$c3 = new C3();\n\necho $c3 instanceof c1;\necho $c3 instanceof c2;\necho $c3 instanceof c3;\necho $c3 instanceof i1;\necho $c3 instanceof i2;\necho $c3 instanceof i3;\n?&gt;\n</pre>',
        type: 1,
        category: 2,
        answer: {
            options: [],
            correct: ["111111"],
            link: ["http://php.net/manual/en/language.oop5.php", "http://php.net/manual/en/language.oop5.interfaces.php"],
            explanation: []
        }
    },
    q228: {
        id: 228,
        text: 'Which of the following are good measures against SQL injection?',
        type: 3,
        category: 3,
        answer: {
            options: ['Use a black list', 'Relay on addslashes', 'Use mysqli_real_escape_string', 'Always code SQL carefully', 'When possible use prepared statements'],
            correct: [3, 5],
            link: ["http://php.net/manual/en/security.database.sql-injection.php", "http://www.php.net/manual/en/mysqli.real-escape-string.php", "http://www.php.net/manual/en/mysqli.quickstart.prepared-statements.php"],
            explanation: []
        }
    },
    q229: {
        id: 229,
        text: 'How would we retrieve the input value in php?\n\n<pre class="brush: php">\n&lt;?php\n&lt;FORM method="POST"&gt;\n\t&lt;input type="hidden" name="user.id" value="123"&gt;\n&lt;/FORM&gt;\n?&gt;\n</pre>',
        type: 2,
        category: 1,
        answer: {
            options: ['$_GET["user.id"]', '$_POST["user.id"]', '$_SERVER["user.id"]', '$_REQUEST["user_id"]'],
            correct: [4],
            link: ["http://php.net/manual/en/reserved.variables.request.php"],
            explanation: ["Dots and spaces in the name of form fields are translated as underscores."]
        }
    },
    q230: {
        id: 230,
        text: 'What will be printed?\r\r<pre class="brush: php">\r&lt;?php\r// supose that $_COOKIE["quantity"] is set\r// and it\'s value is 1 at the start of the script\r\r$q = $_COOKIE["quantity"];\r$q = ++$q << 2;\rsetcookie("quantity", $q);\r\rprint_r($_COOKIE["quantity"]);\r?&gt;\r</pre>',
        type: 1,
        category: 1,
        answer: {
            options: [],
            correct: ["1"],
            link: ["http://php.net/manual/en/reserved.variables.cookies.php", "http://php.net/manual/en/function.setcookie.php"],
            explanation: ["We set a new value for the cookie, but $_COOKIE will not have this value until the next request."]
        }
    },
    q231: {
        id: 231,
        text: 'Which of the following will NOT be a key of <code>$_FILES[$filename]</code> when we upload a file?',
        type: 3,
        category: 1,
        answer: {
            options: ['name', 'extension', 'type', 'size', 'error', 'tmp_name', 'path_to_file'],
            correct: [2, 7],
            link: ["http://php.net/manual/en/reserved.variables.files.php", "http://www.w3schools.com/php/php_file_upload.asp"],
            explanation: []
        }
    },
    q232: {
        id: 232,
        text: 'Which of the following are valid "magic" constants?',
        type: 3,
        category: 0,
        answer: {
            options: ['__NAMESPACE__', '__LINE__', '__DIR__', '__CHAR__', '__CLASS__', '__ARGS__', '__METHOD__', '__VAR__'],
            correct: [1, 2, 3, 5, 7],
            link: ["http://php.net/manual/en/language.constants.predefined.php"],
            explanation: []
        }
    },
    q233: {
        id: 233,
        text: 'What will be the output of this script?\n\n<pre class="brush: php">\n&lt;?php\n$arr = array(\n\tarray(\n\t\t"name" => "John",\n\t\t"surname" => "Smith" \n\t),\n\tarray(\n\t\t"name" => "James",\n\t\t"surname" => "Smith"\n\t),\n\tarray(\n\t\t"name" => "Jonathan",\n\t\t"surname" => "Smith"\n\t)\n);\n\nfunction printUser($id) {\n\tglobal $arr;\n\tforeach ($arr as $key => $user) {\n\t\tif ($id == $key)\n\t\t\techo $user["name"];\n\t\t\techo $user["surname"];\n\t}\n}\n\nprintUser(00);\n?&gt;\n</pre>',
        type: 1,
        category: 0,
        answer: {
            options: [],
            correct: ['JohnSmithSmithSmith'],
            link: [],
            explanation: ["Tricky question, the 'if' doesn't have curly braces, so the surname of all the users will be printed."]
        }
    },
    q234: {
        id: 234,
        text: 'What should go in place of ???????????? for the escript to output "start"?\n\n<pre class="brush: php">\n&lt;?php\nnamespace My\\Space\\Test;\n\nclass A {\n\tstatic function me() {\n\t\techo "start";\n\t}\n}\n\nnamespace Now;\n\nclass A {\n\tstatic function me() {\n\t\techo "end";\n\t}\n}\n\n????????????\n\nOrigin\\A::me();\n?&gt;\n</pre>',
        type: 2,
        category: 2,
        answer: {
            options: ['use \\My\\space\\Test as Origin;', 'namespace \\My\\space\\Test as Origin;', 'use ..\\Origin;', 'use Origin;', 'use \\My\\space\\Test = Origin;', 'end namespace;'],
            correct: [1],
            link: ["http://php.net/manual/en/language.namespaces.php"],
            explanation: []
        }
    },
    q235: {
        id: 235,
        text: 'What will be the output of this script?\n\n<pre class="brush: php">\n&lt;?php\nclass MyException extends Exception {}\n\ntry {\n\tthrow new MyException("Error");\n} catch (Exception $e) {\n\techo "Exception";\n} catch (MyException $e) {\n\techo "MyException";\n}\n?&gt;\n</pre>',
        type: 2,
        category: 0,
        answer: {
            options: ['Error', 'Exception', 'MyException', 'None of the above'],
            correct: [2],
            link: [],
            explanation: ["MyException extends from exception and, as such the first catch will match."]
        }
    },
    q236: {
        id: 236,
        text: 'What does PHP stand for?',
        type: 2,
        category: 0,
        answer: {
            options: ['Personal Hypertext Preprocessor', 'Plain Hypertext Page', 'Hypertext Page Preprocessor', 'PHP: Hypertext Preprocessor', 'Primary Html Preprocessor'],
            correct: [4],
            link: ["http://php.net/manual/en/faq.general.php"],
            explanation: []
        }
    },
    q237: {
        id: 237,
        text: 'What will be the output of this script?\n\n<pre class="brush: php">\n&lt;?php\necho true ? \'what\' : true ? \'will\' : \'print?\';\n?&gt;\n</pre>',
        type: 1,
        category: 0,
        answer: {
            options: [],
            correct: ["will"],
            link: ["http://php.net/manual/en/language.operators.comparison.php"],
            explanation: ["Ternary operators are evaluated from left to right."]
        }
    },
    q238: {
        id: 238,
        text: 'What will be the output of this script?\n\n<pre class="brush: php">\n&lt;?php\necho \'PHP 5\\\\\\.3 is fun\\n\';\n?&gt;\n</pre>',
        type: 2,
        category: 6,
        answer: {
            options: ['PHP 5\\.3 is fun(new line)', 'PHP 5.3 is fun(new line)', 'PHP 5\\\\.3 is fun\\n', 'None of the above'],
            correct: [3],
            link: ["http://php.net/manual/en/language.types.string.php"],
            explanation: ["Single quote does not transform \\. nor \\ n, but it does \\\\"]
        }
    },
    q239: {
        id: 239,
        text: 'What will be the output of this script?\n\n<pre class="brush: php">\n&lt;?php\necho "0" ? false : true;\n?&gt;\n</pre>',
        type: 1,
        category: 0,
        answer: {
            options: [],
            correct: ["1"],
            link: [],
            explanation: ["Even if it is a string, '0' is converted to false by type-juggling."]
        }
    },
    q240: {
        id: 240,
        text: 'What will be printed?\n\n<pre class="brush: php">\n&lt;?php\nclass Vehicle {\n\tconst topSpeed = 100;\n\n\tfunction getTopSpeed() {\n\t\treturn self::topSpeed;\n\t}\n	\n\tfunction maxSpeed() {\n\t\treturn 100;\n\t}\n}\n\nclass Motorcycle extends Vehicle {\n\tconst topSpeed = 150;\n	\n\tfunction maxSpeed() {\n\t\treturn $this->getTopSpeed();\n\t}\n}\n\n$aspira = new Motorcycle();\n\necho $aspira->getTopSpeed(); \n?&gt;\n</pre>',
        type: 1,
        category: 2,
        answer: {
            options: [],
            correct: ["100"],
            link: ["http://php.net/manual/en/language.oop5.late-static-bindings.php"],
            explanation: ["By virtue of late state binding, when we call the parent function Vehicle::getTopSpeed and inside this function we are referring to the constant with self:: in front of it, we will access the constant set in the Vehicle class."]
        }
    },
    q241: {
        id: 241,
        text: 'What is <code>T_PAAMAYIM_NEKUDOTAYIM</code>',
        type: 2,
        category: 0,
        answer: {
            options: ['It is an error level', 'It\'s a constant to identify a SOAP protocol', 'It\'s a system constant with the pid of the PHP script running', 'A predefined pattern to format strings in hebrew', 'It is the scope resolution operator'],
            correct: [5],
            link: ["http://php.net/manual/en/keyword.paamayim-nekudotayim.php", "http://en.wikipedia.org/wiki/Scope_resolution_operator#PHP"],
            explanation: ["Look at the second link for a more detailed explanation."]
        }
    },
    q242: {
        id: 242,
        text: 'What will be printed?\n\n<pre class="brush: php">\n&lt;?php\n$test = "test!";\n    \n$str = <<<\'TEST\'\nThis is a {$test}\nTEST;\n\n$str = explode($str, \'!\');\n\necho $str[0];\n?&gt;\n</pre>',
        type: 1,
        category: 6,
        answer: {
            options: [],
            correct: ["!"],
            link: ["http://www.php.net/manual/en/language.types.string.php#language.types.string.syntax.nowdoc"],
            explanation: ["This questions it's a trap. NOWDOC does not interpolate variables, but it's irrelevant: the explode function takes the delimiter as the first parameter and the string to explode as the second. As such, the output will be just '!'."]
        }
    },
    q243: {
        id: 243,
        text: 'What function would you use to create a DOMElement object from a SimpleXMLElement object?',
        type: 2,
        category: 4,
        answer: {
            options: ['SimpleXMLElement::asXML()', 'simplexml_to_dom()', 'simplexml2dom()', 'dom_import_simplexml()', '$dom = new DOMElement($SimpleXMLElement)', 'SimpleXMLElement::asDom()', 'SimpleXMLElement::saveXML()'],
            correct: [4],
            link: ["http://www.php.net/manual/en/function.dom-import-simplexml.php"],
            explanation: ["The only functions that exists and generate a DOMElement are DOMElement and dom_import_simplexml, but DOMElement does not accept a SimpleXMLElement as a parameter."]
        }
    },
    q244: {
        id: 244,
        text: 'What will be printed?\n\n<pre class="brush: php">\n&lt;?php\n$a = false;\n\nif($a=0)\n\techo "true";\nelse\n\techo "false";\n?&gt;\n</pre>',
        type: 1,
        category: 0,
        answer: {
            options: [],
            correct: ["false"],
            link: [],
            explanation: ["There is a trap in this question. Inside the 'if' we found $a=0 instead of $a==0, so it will always equal to false."]
        }
    }
};
