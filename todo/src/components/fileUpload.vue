<template>
  <div class="container">
    <div class="large-12 medium-12 small-12 cell">
      <h1>Vue JS Axios - Image Upload using PHP API </h1>
      <label>File
        <input type="file" id="file" ref="file" v-on:change="onChangeFileUpload()"/>
      </label>
        <button v-on:click="submitForm()">Upload</button>
    </div>
  </div>
</template>
  
<script>
import axios from 'axios'
  export default {
    data(){
      return {
        file: ''
      }
    },
  
    methods: {
      submitForm(){
            let formData = new FormData();
            formData.append('file', this.file)
  
            axios.post('api.php',
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              }
              
            )
            /*.then(function(data){
              console.log(data.data);
            })
            .catch(function(){
              console.log('FAILURE!!');
            });*/
            .then(function (response) {

          if(!response.data){
             alert('File not uploaded.');
          }else{
             alert('File uploaded successfully.');
          }

       })
       .catch(function (error) {
           console.log(error);
       });

     
      },
  
      onChangeFileUpload(){
        this.file = this.$refs.file.files[0];
      }
    }
  }
</script>


<!--<template>
    <div>
        <p>Click to upload</p>
        <input type="file" @change="onFileSelected">
        <button @click="onUpload">Upload</button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            selectedFile:null
        }
    },
methods:{
    onFileSelected(event){
       // console.log(event)
       this.selectedFile=event.target.files[0]

    },
   onUpload() {
  const formData = new FormData()
  formData.append('myFile', this.selectedFile, this.selectedFile.name)
  axios.post('url',formData)
  .then(res=>{
      console.log(res)
  })
}
}
}
</script>

<style>

</style>-->


