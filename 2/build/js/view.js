function View(t){function e(){var e=tmpl($("#wrapper-template").html());return $("body").append(e),a.elements={input:$(".item-value"),addBtn:$(".item-add"),listContainer:$(".item-list")},a.renderList(t.data),!0}function n(t){var e='[data-id = "'+t+'"]',n=$(e);return n}var a=this;a.renderList=function(t){var e=tmpl($("#list-tamplate").html(),{data:t});return a.elements.listContainer.html(e),!0},a.fixText=function(t){var e=n(t);"disabled"==e.attr("disabled")?(e.removeAttr("disabled"),e.focus()):(e.attr("disabled",!0),e.blur())},a.change=function(t){var e=n(t);"block"!==e.next().next().css("display")?(e.next().next().css("display","block"),e.next().next().next().css("display","none")):(e.next().next().css("display","none"),e.next().next().next().css("display","block"))},a.doneFix=function(t){n(t)},a.removeItem=function(t){$("[data-id = "+t+"]").parent().parent().remove()},e()}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuanMiXSwibmFtZXMiOlsiVmlldyIsIm1vZHVsIiwiaW5pdCIsIndyYXBwZXIiLCJ0bXBsIiwiJCIsImh0bWwiLCJhcHBlbmQiLCJzZWxmIiwiZWxlbWVudHMiLCJpbnB1dCIsImFkZEJ0biIsImxpc3RDb250YWluZXIiLCJyZW5kZXJMaXN0IiwiZGF0YSIsImdldEVsZW1lbnQiLCJ2YWwiLCJzdHIiLCJlbGVtZW50IiwidGhpcyIsImRhdGFzIiwibGlzdCIsImZpeFRleHQiLCJhdHRyIiwicmVtb3ZlQXR0ciIsImZvY3VzIiwiYmx1ciIsImNoYW5nZSIsIm5leHQiLCJjc3MiLCJkb25lRml4IiwicmVtb3ZlSXRlbSIsInBhcmVudCIsInJlbW92ZSJdLCJtYXBwaW5ncyI6IkFBQUUsUUFBU0EsTUFBTUMsR0FNYixRQUFTQyxLQUVQLEdBQUlDLEdBQVVDLEtBQUtDLEVBQUUscUJBQXFCQyxPQVMzQyxPQVJDRCxHQUFFLFFBQVFFLE9BQU9KLEdBQ2pCSyxFQUFLQyxVQUNKQyxNQUFPTCxFQUFFLGVBQ1RNLE9BQVFOLEVBQUUsYUFDVk8sY0FBZVAsRUFBRSxlQUduQkcsRUFBS0ssV0FBV1osRUFBTWEsT0FDZixFQVdWLFFBQVNDLEdBQVlDLEdBQ25CLEdBQUlDLEdBQU0sZUFBc0JELEVBQU0sS0FDbENFLEVBQVViLEVBQUVZLEVBQ2hCLE9BQU9DLEdBNUJQLEdBQUlWLEdBQU9XLElBaUJaWCxHQUFLSyxXQUFhLFNBQVVPLEdBRTNCLEdBQUlDLEdBQU9qQixLQUFLQyxFQUFFLGtCQUFrQkMsUUFBU1EsS0FBTU0sR0FHbkQsT0FEQVosR0FBS0MsU0FBU0csY0FBY04sS0FBS2UsSUFDMUIsR0FTVGIsRUFBS2MsUUFBVSxTQUFVTixHQUN2QixHQUFJRSxHQUFVSCxFQUFXQyxFQUVNLGFBQTVCRSxFQUFRSyxLQUFLLGFBQ1pMLEVBQVFNLFdBQVcsWUFDbkJOLEVBQVFPLFVBRVJQLEVBQVFLLEtBQUssWUFBWSxHQUN6QkwsRUFBUVEsU0FJWGxCLEVBQUttQixPQUFTLFNBQVVYLEdBQ3ZCLEdBQUlFLEdBQVVILEVBQVdDLEVBRW1CLFdBQXpDRSxFQUFRVSxPQUFPQSxPQUFPQyxJQUFJLFlBQzVCWCxFQUFRVSxPQUFPQSxPQUFPQyxJQUFJLFVBQVUsU0FDcENYLEVBQVFVLE9BQU9BLE9BQU9BLE9BQU9DLElBQUksVUFBVSxVQUUzQ1gsRUFBUVUsT0FBT0EsT0FBT0MsSUFBSSxVQUFVLFFBQ3BDWCxFQUFRVSxPQUFPQSxPQUFPQSxPQUFPQyxJQUFJLFVBQVUsV0FJN0NyQixFQUFLc0IsUUFBVSxTQUFVZCxHQUVWRCxFQUFXQyxJQUkxQlIsRUFBS3VCLFdBQWEsU0FBU2YsR0FDMUJYLEVBQUUsY0FBY1csRUFBSSxLQUFLZ0IsU0FBU0EsU0FBU0MsVUFHN0MvQiIsImZpbGUiOiJ2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiICBmdW5jdGlvbiBWaWV3KCBtb2R1bCApeyBcclxuICAgXHJcblxyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBpbml0KCkge1xyXG5cclxuICAgICAgdmFyIHdyYXBwZXIgPSB0bXBsKCQoJyN3cmFwcGVyLXRlbXBsYXRlJykuaHRtbCgpKTtcclxuICAgICAgJCgnYm9keScpLmFwcGVuZCh3cmFwcGVyKTtcclxuICAgICAgc2VsZi5lbGVtZW50cyA9IHtcclxuICAgICAgIGlucHV0OiAkKCcuaXRlbS12YWx1ZScpLFxyXG4gICAgICAgYWRkQnRuOiAkKCcuaXRlbS1hZGQnKSxcclxuICAgICAgIGxpc3RDb250YWluZXI6ICQoJy5pdGVtLWxpc3QnKVxyXG4gICAgIH07XHJcblxyXG4gICAgIHNlbGYucmVuZGVyTGlzdChtb2R1bC5kYXRhKTtcclxuICAgICByZXR1cm4gdHJ1ZTtcclxuICAgfTtcclxuXHJcbiAgIHNlbGYucmVuZGVyTGlzdCA9IGZ1bmN0aW9uIChkYXRhcykge1xyXG5cclxuICAgIHZhciBsaXN0ID0gdG1wbCgkKCcjbGlzdC10YW1wbGF0ZScpLmh0bWwoKSwge2RhdGE6IGRhdGFzfSk7XHJcblxyXG4gICAgc2VsZi5lbGVtZW50cy5saXN0Q29udGFpbmVyLmh0bWwobGlzdCk7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBnZXRFbGVtZW50ICh2YWwpIHtcclxuICAgIHZhciBzdHIgPSAnW2RhdGEtaWQgPSAnICsgJ1wiJyArIHZhbCArICdcIl0nO1xyXG4gICAgdmFyIGVsZW1lbnQgPSAkKHN0cik7XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuICB9O1xyXG5cclxuICBzZWxmLmZpeFRleHQgPSBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICB2YXIgZWxlbWVudCA9IGdldEVsZW1lbnQodmFsKTtcclxuXHJcbiAgICBpZihlbGVtZW50LmF0dHIoJ2Rpc2FibGVkJykgPT0gJ2Rpc2FibGVkJykge1xyXG4gICAgICAgXHRlbGVtZW50LnJlbW92ZUF0dHIoJ2Rpc2FibGVkJyk7IC8vXHJcbiAgICAgICBcdGVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICBcdGVsZW1lbnQuYXR0cignZGlzYWJsZWQnLCB0cnVlKTsgLy9cclxuICAgICAgIFx0ZWxlbWVudC5ibHVyKCk7XHJcbiAgICAgICB9XHJcbiAgICAgfTtcclxuXHJcbiAgICAgc2VsZi5jaGFuZ2UgPSBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgXHR2YXIgZWxlbWVudCA9IGdldEVsZW1lbnQodmFsKTtcclxuXHJcbiAgICAgXHRpZihlbGVtZW50Lm5leHQoKS5uZXh0KCkuY3NzKCdkaXNwbGF5JykgIT09ICdibG9jaycpIHtcdFxyXG4gICAgIFx0XHRlbGVtZW50Lm5leHQoKS5uZXh0KCkuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcclxuICAgICBcdFx0ZWxlbWVudC5uZXh0KCkubmV4dCgpLm5leHQoKS5jc3MoJ2Rpc3BsYXknLCdub25lJyk7XHJcbiAgICAgXHR9IGVsc2Uge1xyXG4gICAgIFx0XHRlbGVtZW50Lm5leHQoKS5uZXh0KCkuY3NzKCdkaXNwbGF5Jywnbm9uZScpO1xyXG4gICAgIFx0XHRlbGVtZW50Lm5leHQoKS5uZXh0KCkubmV4dCgpLmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XHJcbiAgICAgXHR9XHJcbiAgICAgfTtcclxuXHJcbiAgICAgc2VsZi5kb25lRml4ID0gZnVuY3Rpb24gKHZhbCkge1xyXG5cclxuICAgICBcdHZhciBlbGVtZW50ID0gZ2V0RWxlbWVudCh2YWwpO1xyXG5cclxuICAgICB9O1xyXG5cclxuICAgICBzZWxmLnJlbW92ZUl0ZW0gPSBmdW5jdGlvbih2YWwpIHtcclxuICAgICAgJChcIltkYXRhLWlkID0gXCIrdmFsK1wiXVwiKS5wYXJlbnQoKS5wYXJlbnQoKS5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCk7XHJcblxyXG4gICAgXHJcblxyXG4gIH07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9