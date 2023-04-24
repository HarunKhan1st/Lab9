function change_color(text_id)
{
    let color_text = document.getElementById(text_id).value;
    document.getElementById("Change_Me").style.color = color_text; 
}

function change_border(text_id)
{
    let color_border = document.getElementById(text_id).value;
    document.getElementById("Change_Me").style.borderColor = color_border;
}

function change_border_size(text_id)
{
    let color_border_size = document.getElementById(text_id).value;
    if (color_border_size < 40)
        {document.getElementById("Change_Me").style.borderWidth = color_border_size + "px";}
    else
    {
        document.getElementById("Change_Me").style.borderWidth = "40px";
    }
}