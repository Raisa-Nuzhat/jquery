/*$(function()
{
    let para=$('p')
    console.log(para)
    para.click(function()
    {
       $(this).hide()
    })
})
$(function()
{
    let hide=$('.Hide')
    let box=$('.box')
    let show=$('.Show')
    let toggle=$('.toggle')
    hide.click(function()
    {
       box.slideUp(500)
    })
    show.click(function()
    {
        box.slideDown(500)
    })
    toggle.click(function()
    {
        box.fadeToggle(500)
    })

})*/
$(function()
{
    let togglerBtn=$('nav .togglerBtn')
    let isActive=false
    let menuIcon=$('.menuIcon')
    let cancelIcon=$('.cancelIcon')
    let searchBar=$('.searchBar')
    let searchBox=$('.searchBox')
    let crossIcon=$('.crossIcon')
    togglerBtn.click(function()
    {
        let sideBar=$('.sidebar')
        sideBar.toggleClass('activeSideBar')
        isActive=!isActive
        if(isActive==true)
        {
            menuIcon.hide(500)
            cancelIcon.show(500)
        }
        else
        {
            cancelIcon.hide(500)
            menuIcon.show(500)
        }
    })
    searchBar.click(function()
    {
        searchBox.slideDown(500)
    })
    crossIcon.click(function()
    {
        searchBox.fadeOut(500)
    })
})

