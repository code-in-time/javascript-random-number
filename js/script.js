/**
 * Wait fo the page to load
 */
$(function(){
    var btnGenerate =$('.btnGenerate'),
        txtNumber = $('.txtNumber');


    // Bind a click event to the generate button
    btnGenerate.click(function(){
        var uniQueNumber = uniqueNumberBuilder.build();
        txtNumber.text(uniQueNumber);
    });

});
