function printLine(line)
{
    var out = '<p>' + line + '</p>';
    document.getElementById("output").innerHTML += out;
}

function getInput()
{
    document.getElementById("output").innerHTML = " ";
    var inp = document.input.inputBox.value;
    var lines = inp.split("\n");
    var i;
    var j;
    for(i = 0; i < lines.length; i++)
    {
        var line = lines[i].split(" ");
        for(j = 0; j < line.length; j++)
            {
                printLine(line)
                var word = line.shift();
                line.push(word);
            }
    }
}