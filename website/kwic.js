// Module to sort circular shifts from CircularShifter in alphabetical order
function Alphabetizer() 
{
    // 1-D array to store circular shifts in alphabetical order
    this.alphaShifts = [];
    
    // Alphabetize circular shifts
    this.alpha = function(circular)
    {
        this.alphaShifts = circular.shifts.sort();
    };
    
    // Function to return sorted shift at index l
    this.getLine = function(l)
    {  
        return this.alphaShifts[l];
    };
    
    // Function to return number of sorted lines in Alphabetizer 
    this.getNumLines = function()
    {
        return this.alphaShifts.length;
    };
}

// Module to produce circular shifts of lines stored in LineStorage
function CircularShift()
{
    // 1-D array to store circular shifts of lines from LineStorage
    this.shifts = [];
    
    // Function to perform circular shifts of lines from LineStorage
    this.setup = function(storage)
    {
        var l;
        var w;

        // For each line in lines
        for(l=0; l < storage.lines.length; l++)
        {
            // For each word in lines[l]
            for(w=0; w < storage.words[l].length; w++)
            {
                this.shifts.push(storage.words[l].join(' '));
                var word = storage.words[l].shift();
                storage.words[l].push(word);
            }
        }
    };
    
    // Function to return circular shift at index l
    this.getLine = function(l)
    {
        return this.shifts[l];
    };
    
    // Function to return number of circular shifts
    this.getNumLines = function()
    {
        return this.shifts.length;  
    };
    
    // Function to output unsorted circular shifts for demonstration purposes
    this.print = function()
    {
        var n;
        var out = '<h3>Circular Shifts: </h3>';
        document.getElementById("circularshifts").innerHTML += out;
        for(n=0; n<this.shifts.length; n++)
        {
            var i = n+1;
            out = '<p>' + i + '. ' + this.shifts[n] + '</p>';
            document.getElementById("circularshifts").innerHTML += out;
        }
    };
       
}

// Module to store all characters, words, and lines from Input
function LineStorage()
{
    // 1-D array to store original lines
    this.lines = [];
    
    // 2-D array to stores words at [line][word] for easier access/traversal
    this.words = [[]];
    
    // Variable to track number of lines
    this.numLines;
    
    // Variable to track/reference number of words
    this.numWords = [];
    
    // Add line to lines[l]
    this.addLine = function(l, line)
    {
        this.lines[l] = line;
        // Javascript requires rows in 2-D array to be declared before use
        this.words[l] = [];
        // Increment number of lines for tracking
        this.numLines++;
    };
    
    // Add word to words[l][w]
    this.addWord = function(l, w, word)
    {
        this.words[l][w] = word;
        this.numWords[l]++;
    };
    
    // Get line at lines[l]
    this.getLine = function(l)
    {
        return this.lines[l];
    };
    
    // Get word at words[l][w]
    this.getWord = function(l, w)
    {
        return this.words[l][w];
    };
    
    // Get number of lines in lines[]
    this.getNumLines = function()
    {
        return this.lines.length;
    };
    
    // Function to output LineStorage contents for demonstration purposes
    this.print = function()
    {
        var n;
        var out = '<h3>Line Storage: </h3>';
        document.getElementById("linestorage").innerHTML += out;
        for(n=0; n<this.lines.length; n++)
        {
            var i = n+1;
            out = '<p>' + i + '. ' + this.lines[n] + '</p>';
            document.getElementById("linestorage").innerHTML += out;
        }
    };
    
}

// Module to read data from HTML Input box and store in LineStorage object
function Input()
{
    // Create a new LineStorage object 
    this.lineStorage = new LineStorage();
    
    this.parse = function()
    {
        // Get input from HTML text input box
        var input = document.input.inputBox.value;

        // Parse input by newline delimiter "\n" and store each line in array
        var lines = input.split("\n");

        // For each line in lines array
        var l;
        var w;
        for(l=0; l < lines.length; l++)
        {
            //if(lines[l] == "") {lines.splice(l, 1); continue;}

            // Add line to 1-D lineStorage array
            this.lineStorage.addLine(l, lines[l]);
            
            // Split line l into words and store in words array
            var words = lines[l].split(" ");

            // For each word in words array
            for(w=0; w < words.length; w++)
            {
                // Add word to lineStorage at [l][w]
                this.lineStorage.addWord(l, w, words[w]);
            }
        }
        
        this.lineStorage.print();
        return this.lineStorage;
    };
}

// Module to output sorted shifts from CircularShift
function Output()
{
    this.print = function(alpha)
    {
        var n;
        var out = '<h3>Alphabetized: </h3>';
        document.getElementById("output").innerHTML += out;
        for(n=0; n < alpha.getNumLines(); n++)
        {
            var i = n+1;
            out = '<p>' + i + '. ' + alpha.getLine(n) + '</p>';
            document.getElementById("output").innerHTML += out;
        }
    };
}

// Main control module to invoke Input, LineStorage, CircularShift, Alphabetizer, and Output. Invoked by HTML submit button. 
function Main()
{
    // Clear previous output from the screen
    document.getElementById("linestorage").innerHTML = " ";
    document.getElementById("circularshifts").innerHTML = " ";
    document.getElementById("output").innerHTML = " ";
    
    // Create new Input object
    var storage = new Input();
    
    // Parse input by line and store in LineStorage object
    storage.parse();
    
    // Create new CircularShift object
    var circular = new CircularShift();
    
    // Perform circular shifts on lines from Input's LineStorage
    circular.setup(storage.lineStorage);
    
    // Print circular shifts for demonstration purposes
    circular.print();
    
    // Create new alphabetizer object
    var sorted = new Alphabetizer();
    
    // Perform sorting of circular shifts from CircularShifter
    sorted.alpha(circular);
    
    // Create new Output object
    var out = new Output();
    
    // Print sorted CircularShifts to the HTML DOM
    out.print(sorted);
}
