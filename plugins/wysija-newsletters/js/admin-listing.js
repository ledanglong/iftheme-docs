jQuery(function(e){function t(){flag=!1,e(".batch-select td").children().each(function(){e(this).hasClass("display")&&(flag=!0)}),flag?e(".batch-select").show():e(".batch-select").hide()}function a(){e("#force_select_all").is(":checked")&&e(".checkboxselec, #user-id input, #force_select_all").attr("checked",!1),subscriberCount=e("#posts-filter input.checkboxselec:checked").length,e(".batch-select div.clear_select_all").removeClass("display").hide(),subscriberCount>0?e(".batch-select div.force_to_select_all_link").removeClass("display").addClass("display").show():e(".batch-select div.force_to_select_all_link").removeClass("display").hide(),t()}e("#_wpnonce").attr("disabled","disabled"),e(".global-action").change(function(){var t=this.value;e(".global-action").val(t),"delete"==t||"bulk_delete"==t?e("#_wpnonce").removeAttr("disabled"):e("#_wpnonce").attr("disabled","disabled")}),e(".orderlink").click(function(){return e(this).parent("th.sortable , th.sorted").click(),!1}),e("#posts-filter").submit(function(){e("#wysija-pagination").length&&parseInt(e("#wysija-pagination").val())>parseInt(e("#wysija-pagination-max").val())&&e("#wysija-pagination").val(e("#wysija-pagination-max").val())}),e(".bulksubmit").click(function(){e(".global-action").attr("name","action");var t=!1;return e("#posts-filter input.checkboxselec:checked").each(function(){t=!0}),t?("disabled"==e("#_wpnonce").attr("disabled")&&e("#_wpnonce").remove(),!0):(alert(wysijatrans.selecmiss),!1)}),e("#user-id").click(a),e(".checkboxselec").click(function(){e(this).is(":checked")||(e("#user-id input, #force_select_all").attr("checked",!1),e(".batch-select div.force_to_select_all_link").removeClass("display").hide(),e(".batch-select div.clear_select_all").removeClass("display").hide()),t()}),e(".force_to_select_all_link a").click(function(a){a.preventDefault(),e(".checkboxselec, #user-id input, #force_select_all").attr("checked","checked"),e(".batch-select div.force_to_select_all_link").removeClass("display").hide(),e(".batch-select div.clear_select_all").removeClass("display").addClass("display").show(),t()}),e(".clear_select_all a").click(function(){e(".batch-select div.force_to_select_all_link").removeClass("display").hide(),e(".batch-select div.clear_select_all").removeClass("display").hide(),e(".checkboxselec, #user-id input, #force_select_all").attr("checked",!1),t()}),e("th.sortable , th.sorted").click(function(){var t="";t=e(this).hasClass("sorted")?e(this).hasClass("asc")?"desc":"asc":"desc";var a=e(this).attr("id");e("#wysija-orderby").length?(e("#wysija-orderby").val(a),e("#wysija-ordert").val(t)):(e("#posts-filter").append('<input id="wysija-ordert" type="hidden" name="ordert" value="'+t+'" />'),e("#posts-filter").append('<input id="wysija-orderby" type="hidden" name="orderby" value="'+a+'" />')),e("#posts-filter").submit()}),e("a.page-numbers").click(function(){var t=e(this).attr("alt");return e("#wysija-pagination").length?e("#wysija-pagination").val(t):e("#posts-filter").append('<input id="wysija-pagination" type="hidden" name="pagi" value="'+t+'" />'),e("#posts-filter").submit(),!1}),e("a.page-limit").click(function(){var t=e(this).html();return e("#wysija-pagelimit").length?e("#wysija-pagelimit").val(t):e("#posts-filter").append('<input id="wysija-pagelimit" type="hidden" name="limit_pp" value="'+t+'" />'),e("#posts-filter").submit(),!1}),e(document).ready(function(){e("a.exported-file").length&&window.open(e("a.exported-file").attr("href"),"Download")}),e(".searchbox").blur(function(){e(this).val(trim(e(this).val()))}),t()});
