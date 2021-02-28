<template>
  <div class="container">
  <div class="home row">
    <div class="col-5 gx-4 gy-4" style="margin: 20px auto;">
        <form ref="form">
            <div class="mb-3">
                <label for="makeVehicle" class="form-label">Make: </label>
                <input type="text" class="form-control" id="makeVehicle" ref="make">
            </div>
            <div class="mb-3">
                <label for="modelVehicle" class="form-label">Model: </label>
                <input type="text" class="form-control" id="modelVehicle" ref="model">
            </div>
            <div class="mb-3">
                <label for="yearVehicle" class="form-label">Year: </label>
                <input type="text" class="form-control" id="yearVehicle" ref="year">
            </div>
          
            <button type="submit" class="btn btn-primary" v-on:click="submit">Submit</button>
        </form>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  methods: {
    submit: function(){
        console.log(this.$refs.form.submit())
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ make: this.$refs.make.value, model: this.$refs.model.value, year: this.$refs.year.value})
        };
        fetch("http://localhost:3000/vehicle/", requestOptions).then(async response => this.vehicles = await response.json())
    }
  }
};
</script>
