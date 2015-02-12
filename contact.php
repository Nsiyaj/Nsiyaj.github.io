<?php 
include("php/global.php");
include("php/header.php");
?>				
					
	<div class="clearfix">
    	<div class="row">
            <div class="box">
                <div class="col-lg-12">
                    
                    <h2 class="intro-text text-center"><strong>Contact form</strong>
                    </h2>
                   
                    <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;ll=37.0625,-95.677068&amp;spn=56.506174,79.013672&amp;t=m&amp;z=4&amp;output=embed">
                    </iframe><br /><br />
                    <p>Let us know what you need by filling out the contact form below and we’ll put you in touch with someone who can help.</p>
                    
                    <form method="post" action="php/server.php" role="form">
                        <div class="row">
                            <div class="form-group col-lg-4">
                                <label>Name</label>
                                <input type="text" class="form-control">
                            </div>
                            <div class="form-group col-lg-4">
                                <label>Email Address</label>
                                <input type="email" class="form-control">
                            </div>
                            <div class="form-group col-lg-4">
                                <label>Phone Number</label>
                                <input type="tel" class="form-control">
                            </div>
                            <div class="clearfix"></div>
                            <div class="form-group col-lg-12">
                                <label>Message</label>
                                <textarea class="form-control" rows="6"></textarea>
                            </div>
                            <div class="form-group col-lg-12">
                                <input type="hidden" name="save" value="contact">
                                <button type="submit" class="btn btn-default">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>

  <?php 
include("php/footer.php");
?>

