
$(function()
{
    

	$('#reused_form').submit(function(e)
      {
        e.preventDefault();

        $form = $(this);
        $('button[type="submit"]', $form).each(function()
        {
            $btn = $(this);
            $btn.prop('type','button' ); 
            $btn.prop('orig_label',$btn.text());
            $btn.text('Message sent');
        });
        
      
        
      });	
});
