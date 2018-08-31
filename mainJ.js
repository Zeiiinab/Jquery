$("#b").click(function()
{
    $("#myText").css("fontWeight","bold");
    
});

$("#i").click(function()
{
    $("#myText").css("fontStyle","italic");
    
});

$("#u").click(function()
{
    $("#myText").css("textDecoration","underline");
    
});

$("#colorList").change(
    function()
{
    $("#myText").css("color",$("#colorList").val());
    
    
}
);



