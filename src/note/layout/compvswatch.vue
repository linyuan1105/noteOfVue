<template>
    <div>
        <button>btn</button>
        {{mydata}}
    </div>
</template>

<script>
export default{
     data() {
         return {
             mydata:100
         }
     },
     watch: {
         mydata(old){
            console.log(old)
         }
     }
}

</script>








