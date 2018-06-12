function printLine(line)
{
    var out = '<p>' + line + '</p>';
    document.getElementById("output").innerHTML += out;
}

//function Alphabetizer() 
//{
//    
//    this.alpha = function()
//    {
//        
//    };
//    
//    this.getLine = function()
//    {  
//        
//    };
//}

function CircularShift()
{
    var shifts = [];
    
    this.setup = function(storage)
    {
        var l, w = 0;
        // For each line in lines
        for(l; l < storage.numLines; l++)
        {
            
            // For each word in lines[l]
            for(w; w < storage.numWords[l]; w++)
            {
                shifts.push(storage.words[l]);
              //  printLine(storage.words[l]);
                var word = storage.words[l].shift();
                storage.words[l].push(word);
            }
        }
    };
    
//    this.print = function()
//    {
//        var n = 0;
//        for(n; n < shifts.length; n++)
//        {
//            printLine(shifts[n]);        
//        }
//        
//    };
    
    this.getLine = function()
    {
        
    };
       
}


function LineStorage()
{
    // 1-D array to store original lines
    var lines = [];
    
    // 2-D array to stores words at [line][word] for easier access/traversal
    var words = [[]];
    
    // Variable to track number of lines
    var numLines;
    
    // Variable to track/reference number of words
    var numWords = [];
    
    // Add line to lines[l]
    this.addLine = function(l, line)
    {
        lines[l] = line;
        numLines++;
    };
    
    // Add word to words[l][w]
    this.addWord = function(l, w, word)
    {
        words[l][w] = word;
        numWords[l]++;
    };
    
    // Get line at lines[l]
    this.getLine = function(l)
    {
        return lines[l];
    };
    
    // Get word at words[l][w]
    this.getWord = function(l, w)
    {
        return words[l][w];
    };
    
}


function Input()
{
    var lineStorage = new LineStorage();
    
    this.parse = function()
    {
        // Get input from HTML text input box
        var input = document.input.inputBox.value;
        
        // Parse input by newline delimiter "$" and store each line in array
        var lines = input.split("$");
        
        // For each line in lines array
        var l, w = 0;
        for(l; l < lines.length; l++)
        {
            // Add line to 1-D lineStorage array
            lineStorage.addLine(l, lines[l]);
            
            // Split line l into words and store in words array
            var words = lines[l].split(" ");
            console.log(words);
            // For each word in words array
            for(w; w < words.length; w++)
            {
                // Add word to lineStorage at [l][w]
                lineStorage.addWord(l, w, word[w]);
            }
        }  
    };
}

//function Output()
//{
//    this.print = function()
//    {
//        
//        
//    };
//
//}

function Main()
{
    // Clear previous output from the screen
    document.getElementById("output").innerHTML = " ";
    
    var storage = new Input();
    storage.parse();
    
//    var circular = new CircularShift();
//    circular.setup(storage);
   // circular.print();
}
    
    
// Old code from Idea 1
    
//    var lines = inp.split("\n");
//    var i;
//    var j;
//    for(i = 0; i < lines.length; i++)
//    {
//        var line = lines[i].split(" ");
//        for(j = 0; j < line.length; j++)
//            {
//                printLine(line)
//                var word = line.shift();
//                line.push(word);
//            }
//    }


// Old code from Idea 1
