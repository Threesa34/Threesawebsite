var appEntity = angular.module('appEntity', ['ui.bootstrap', 'ngSanitize'])

appEntity.controller('entityController', function ($window, $http, $scope) {


    /* MAYUR UPDATES
        @18/08/2019
        404 PAGE
    */

  


    
    
      // Trigger the event (useful on page load).
      

    $scope.verifyUrl = function()
    {


        var existingurl = registerdUrls.filter(function(url){
            return url == location.href;
        });

        // console.log(existingurl);
    }

   /* END */

    //mansi 18-08-2019
    $scope.calldiv = function()
    {
        
    }
   

    $scope.customer = {};

    $scope.internetPlans = [{
        heading: "ROCKET",
        offer_amount: 3000,
        period: "/yr.",
        speed: "Speed 10 Mbps",
        table_class: "info",
        details: [
            ' <i class="fa fa-angle-double-right"></i>Monthly @ <b>&#8377;  500.00/-</b>',
            '<i class="fa fa-angle-double-right"></i>Pay for 4 months & Get 2 months free @ <b>&#8377;  2000.00/-</b>',
            '<i class="fa fa-angle-double-right"></i>Pay for 6 months & Get 6 months free @ <b>&#8377;  3000.00/-</b>',
            '<i class="fa fa-angle-double-right"></i>GST 18% will be extra as applicable to all plans.'
        ]
    }, {
        heading: "ROCKET 2.0",
        offer_amount: 4200,
        period: "/yr.",
        speed: "Speed 20 Mbps",
        table_class: "success",
        details: [
            ' <i class="fa fa-angle-double-right"></i>Monthly @ <b>&#8377;  700.00/-</b>',
            '<i class="fa fa-angle-double-right"></i>Pay for 4 months & Get 2 months free @ <b>&#8377;  2800.00/-</b>',
            '<i class="fa fa-angle-double-right"></i>Pay for 6 months & Get 6 months free @ <b>&#8377;  4200.00/-</b>',
            '<i class="fa fa-angle-double-right"></i>GST 18% will be extra as applicable to all plans.'
        ]
    }, {
        heading: "AGNI 4.0",
        offer_amount: 4800,
        period: "/yr.",
        speed: "Speed 40 Mbps",
        table_class: "warning",
        details: [
            ' <i class="fa fa-angle-double-right"></i>Monthly @ <b>&#8377;  800.00/-</b>',
            '<i class="fa fa-angle-double-right"></i>Pay for 4 months & Get 2 months free @ <b>&#8377;  3200.00/-</b>',
            '<i class="fa fa-angle-double-right"></i>Pay for 6 months & Get 6 months free @ <b>&#8377;  4800.00/-</b>',
            '<i class="fa fa-angle-double-right"></i>GST 18% will be extra as applicable to all plans.'
        ]
    }, {
        heading: "AGNI 7.0",
        offer_amount: 7200,
        period: "/yr.",
        speed: "Speed 70 Mbps",
        table_class: "royal",
        details: [
            ' <i class="fa fa-angle-double-right"></i>Monthly @ <b>&#8377;  1200.00/-</b>',
            '<i class="fa fa-angle-double-right"></i>Pay for 4 months & Get 2 months free @ <b>&#8377;  4800.00/-</b>',
            '<i class="fa fa-angle-double-right"></i>Pay for 6 months & Get 6 months free @ <b>&#8377;  7200.00/-</b>',
            '<i class="fa fa-angle-double-right"></i>GST 18% will be extra as applicable to all plans.'
        ]
    }];


    document.getElementById("home").focus();

    $scope.AddNewEnquiry = function () {
        $scope.customer.source = 'Website';

        $http({
                method: 'POST',
                url: 'http://103.252.7.5:8897/api/AddNewEnquiry/',
                data: $scope.customer,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .success(function (data) {
                swal({
                    title: "Thank You!",
                    text: data.message,
                });
                $scope.customer = {};
            });
    };

    $scope.AddNewComplaints = function () {
        $scope.complaint.createdby = 'From Website';
        $http({
                method: 'POST',
                url: 'http://103.252.7.5:8897/api/AddNewComplaints/',
                data: $scope.complaint,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .success(function (data) {
                alert(data.message);
                $scope.complaint = {};
            });
    };

    $scope.getPlanDetails = function (plandetails) {
        $scope.customer.comment = "Enquiry for Plan: \n" + plandetails.heading + ' - ' + plandetails.speed + ' - ' + plandetails.offer_amount + ' ' + plandetails.period;
        document.getElementById("ms-form-pass-rn-enq").focus();
    };



    function hidepopup()
	{
		
		clearTimeout(ShowFrenchisiesPopup);
		var hideFrenchisiesPopup = setTimeout(function () {

        $scope.customer.comment = "Enquiry for New franchise";

        $('#modal_Enquiries_frenchisies').modal('hide');
        clearTimeout(hideFrenchisiesPopup);
    }, 5000);
		
	}

    var ShowFrenchisiesPopup = setTimeout(function () {

        $scope.customer.comment = "Enquiry for New franchise";

        $('#modal_Enquiries_frenchisies').modal({
            show: true,
            backdrop: 'static',
             keyboard: false
        });
        hidepopup()
    }, 3000);

});
