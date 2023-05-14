 <script>
        var tablinks=document.getElementsByClassName("tab-links")
        var tabcontents=document.getElementsByClassName("tab-contents")

        function opentab(tabname)

            for(tablink of tablinks){
                tablink.classlist.remove("active")
            }
            for(tabcontent of tabcontents){
                tabcontent.classlist.remove("active-tab")
            }
        
    </script>