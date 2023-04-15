const langs = {
    0: "JS",
    1: "PHP"
};
const seasons = {
    0: "ZIMA",
    1: "WIOSNA",
    2: "LATO",
    3: "JESIEŃ"
}
const jobs = {
    0: {
        title: "E.14",
        address: "e14"
    },
    1: {
        title: "EE.09",
        address: "ee09"
    },
    2: {
        title: "INF.03",
        address: "inf03"
    }
}

var exams;
var table;

function buildTable() 
{  
    exams.forEach(element => {
        let year = element.year;
        let job = element.job;
        let season = element.season;
        let title = element.title;
        let exno = element.exno.toString().padStart(2, '0');
        let lang = element.lang;
        table.append(`<tr><td scope="row">${year}</td><td>${jobs[job].title}</td><td>${seasons[season]}</td><td>${title}</td><td>${exno}</td><td>${langs[lang]}</td><td><a class="btn btn-outline-primary" href="https://raw.githubusercontent.com/viktorchernikov/Egzaminy-Zawodowe/main/resources/data/exams/${jobs[job].address}/${year}/${season}/${exno}/exam.pdf" download="ciekawy-arkusz"><i class="fa fa-download"></i> ARKUSZ</a><a class="btn btn-outline-primary" href="https://raw.githubusercontent.com/viktorchernikov/Egzaminy-Zawodowe/main/resources/data/exams/${jobs[job].address}/${year}/${season}/${exno}/materials.zip" download><i class="fa fa-download"></i> MATERIAŁY</a><a class="btn btn-outline-primary" href="https://raw.githubusercontent.com/viktorchernikov/Egzaminy-Zawodowe/main/resources/data/exams/${jobs[job].address}/${year}/${season}/${exno}/solution.zip" download><i class="fa fa-download"></i> ROZWIĄZANIE</a></td></tr>`);
    });
}
function clearTable() 
{  
    table.html("");
}



table = $("#examlist");
clearTable();
$.get("../resources/data/exams/exams-tasaibd.json", (data) => {
    exams = data;
    buildTable();
});