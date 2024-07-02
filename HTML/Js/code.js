function showSidebar(){
    const sidebar= document.querySelector('.sidebar')
    sidebar.style.display='flex'
}
function hideSidebar(){
    const sidebar= document.querySelector('.sidebar')
    sidebar.style.display='none'
}
// Function to update the output
function runCode() {
        const htmlCode = document.getElementById("html-code").value;
        const output = document.getElementById("output");

        output.contentDocument.open();
        output.contentDocument.write(htmlCode);
        output.contentDocument.close();
}
// Function to update the output
function runCode1() {
    const htmlCode = document.getElementById("html-code1").value;
    const output = document.getElementById("output1");

    output.contentDocument.open();
    output.contentDocument.write(htmlCode);
    output.contentDocument.close();
}
function runCode2() {
    const htmlCode = document.getElementById("html-code2").value;
    const output = document.getElementById("output2");

    output.contentDocument.open();
    output.contentDocument.write(htmlCode);
    output.contentDocument.close();
}
function runCode3() {
    const htmlCode = document.getElementById("html-code3").value;
    const output = document.getElementById("output3");

    output.contentDocument.open();
    output.contentDocument.write(htmlCode);
    output.contentDocument.close();
}
function runCode4() {
    const htmlCode = document.getElementById("html-code4").value;
    const output = document.getElementById("output4");

    output.contentDocument.open();
    output.contentDocument.write(htmlCode);
    output.contentDocument.close();
}
function runCode5() {
    const htmlCode = document.getElementById("html-code5").value;
    const output = document.getElementById("output5");

    output.contentDocument.open();
    output.contentDocument.write(htmlCode);
    output.contentDocument.close();
}
function runCode6() {
    const htmlCode = document.getElementById("html-code6").value;
    const output = document.getElementById("output6");

    output.contentDocument.open();
    output.contentDocument.write(htmlCode);
}
function runCode7() {
    const htmlCode = document.getElementById("html-code7").value;
    const output = document.getElementById("output7");

    output.contentDocument.open();
    output.contentDocument.write(htmlCode);
}

