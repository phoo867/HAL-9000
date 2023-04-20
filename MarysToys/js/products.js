// jqery code for glow in function
$(".glowIn").each(function() {
    var letters = $(this).text().split("");
    $(this).empty();
    $.each(letters, function(i, letter) {
      var span = $("<span>").text(letter);
      span.css("animation-delay", i * 0.05 + "s");
      $(this).append(span);
    });
  });


  $(document).ready(function() {
    // Hide similar products initially
    $('#similarproducts').hide();
  
    // Show similar products when #unicorn is clicked
    $('#unicorn').click(function() {
      $('#similarproducts').show();
      $('.ironman, .minion, .hellokitty, .1958, .rubberduck, .teddybears, .Lego').hide();
      $('.unicorn').show();
      });

    // Show similar products when #ironman is clicked
    $('#ironman').click(function() {
      $('#similarproducts').show();
      $('.unicorn, .minion, .hellokitty, .1958, .rubberduck, .teddybears, .Lego').hide();
      $('.ironman').show();
      });

    // Show similar products when #minion is clicked
    $('#minion').click(function() {
      $('#similarproducts').show();
      $('.unicorn, .ironman, .hellokitty, .1958, .rubberduck, .teddybears, .Lego').hide();
      $('.minion').show();
      });

    // Show similar products when #hellokitty is clicked
    $('#hkitty').click(function() {
      $('#similarproducts').show();
      $('.unicorn, .ironman, .minion, .1958, .rubberduck, .teddybears, .Lego').hide();
      $('.hellokitty').show();
      });

    // Show similar products when #pfury is clicked
    $('#pfury').click(function() {
      $('#similarproducts').show();
      $('.unicorn, .ironman, .minion, .hellokitty, .rubberduck, .teddybears, .Lego').hide();
      $('.1958').show();
      });

    // Show similar products when #rduck is clicked
    $('#rduck').click(function() {
      $('#similarproducts').show();
      $('.unicorn, .ironman, .minion, .hellokitty, .1958, .teddybears, .Lego').hide();
      $('.rubberduck').show();
      });

    // Show similar products when #rduck is clicked
    $('#tbears').click(function() {
      $('#similarproducts').show();
      $('.unicorn, .ironman, .minion, .hellokitty, .1958, .rubberduck, .Lego').hide();
      $('.teddybears').show();
      });

    // Show similar products when #legos is clicked
    $('#legos').click(function() {
      $('#similarproducts').show();
      $('.unicorn, .ironman, .minion, .hellokitty, .1958, .rubberduck, .teddybears').hide();
      $('.Lego').show();
      });
  });
  
 
