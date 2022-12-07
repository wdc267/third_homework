<template>
    <div id="menubar" class="w">
        <div class="dropdown">
            <a href="#">File</a>
        </div>
        <div class="dropdown">
            <a href="#">Edit</a>
        </div>
        <div class="dropdown">
            <a href="#">View</a>
        </div>
        <div class="dropdown">
            <a href="#">Insert</a>
            <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
            </div>
        </div>
        <div class="dropdown">
            <a href="#">Setting</a>
        </div>
        <div class="dropdown">
            <a href="#">Help</a>
        </div>
    </div>
</template>

<script>
export default {
    name:'Menubar'
}
</script>

<style scoped>
#menubar {
        height: 40px;
        background-color: #f8f8f8;
        border: 1px solid #e7e7e7;
    }

    .dropdown {
        position: relative;
        display: inline-block;
    }

    .dropdown a {
        padding: 10px;
        font-size: 14px;
        color: #565656;
        line-height: 40px;
    }
    .dropdown a:hover {
        color: #409eff
    }
    .dropdown:hover .dropdown-content {
        display: block;
    }
   .dropdown-content {
       display: none;
       position: absolute;
       background-color: #f9f9f9;
       min-width: 100px;
       box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
       z-index: 1;
   }
   .dropdown-content a {
       color: black;
       padding: 5px 5px;
       text-decoration: none;
       display: block;
   }
   .dropdown-content a:hover {
       background-color: #f1f1f1
   }
</style>