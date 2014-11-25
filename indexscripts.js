function LoadPortfolio()
{
    var func = function(xmlHttpResponse)
    {
        document.getElementById("htmlbody").innerHTML = xmlHttpResponse;
    }
    LoadPageAjax(func, "mainpages/portfolio.html", false);
    LoadPortfolioPages();
    SetTrap(0, 2);
}
function LoadPortfolioPages()
{

}
function SetTrap(initCur, initTarget)
{
    var classes = document.getElementsByClassName("hey");
    var func = function()
    {
        Trap(initCur, initTarget);
    }
    var classes = document.getElementsByClassName("hey");
    for (var index = 0; index < classes.length; index++)
    {
        var clone = classes[index].cloneNode(true);
        classes[index].parentNode.replaceChild(clone, classes[index]);
        clone.addEventListener("click", func);
    }
}
function Trap(cur, curGoal)
{
    if (cur === curGoal)
    {
        window.open("http://heyyeyaaeyaaaeyaeyaa.com/", "_blank");
        curGoal *= 2;
    }
    cur += 1;
    var func = function()
    {
        Trap(cur, curGoal);
    }
    var classes = document.getElementsByClassName("hey");
    for (var index = 0; index < classes.length; index++)
    {
        var clone = classes[index].cloneNode(true);
        classes[index].parentNode.replaceChild(clone, classes[index]);
        clone.addEventListener("click", func);
    }
}
function LoadBlog()
{
    var func = function(xmlHttpResponse)
    {
        document.getElementById("htmlbody").innerHTML = xmlHttpResponse;
    }
    LoadPageAjax(func, "mainpages/blog.html", false);
    LoadBlogPages();
}
function LoadBlogPages()
{
    var pages = [["11-3-2014.html", "./pictures/foggy.jpg"], ["10-13-2014.html","./pictures/forest.jpg"], ["9-22-2014.html", "./pictures/galaxy.jpg"], ["9-8-2014.html","./pictures/theworldisflat.jpg"], ["8-24-2014.html","./pictures/mountains.jpg"]];
    for (pageIndex in pages)
    {
        var page = ("blog/" + pages[pageIndex][0]);
        var func = function(xmlHttpResponse)
        {
            document.getElementById("pagesDiv").innerHTML += xmlHttpResponse;
        }

        LoadPageAjax(func, page, false);
    }
    var pageClasses = document.getElementsByClassName("blogPost");
    for (pageIndex in pageClasses)
    {
        pageClasses[pageIndex].style.background = "url(" + pages[pageIndex][1] + ") no-repeat";
        pageClasses[pageIndex].style.backgroundSize = "cover";
    }
}
function LoadPageAjax(behaviorFunction, pageName, isAsync)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function()
    {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        {
            behaviorFunction(xmlHttp.responseText);
        }
        else if (xmlHttp.status == 404)
        {
            behaviorFunction("Error.");
        }
    }
    xmlHttp.open("GET", pageName, isAsync);
    xmlHttp.send();
}
