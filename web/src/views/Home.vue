<template>
<div class="container">
  <div class="home row">
    <div v-if="vehicles.length === 0" class="col">
        <h2> No vehicle found at the moment </h2>
    </div> 
  </div>
  <div class="home row">
    <div class="col-4 gx-4 gy-4">
      <p>
        <input type="text" name="search" class="form-control" id="search-input" placeholder="Search" v-model="searchString"/>
      </p>
    </div>
  </div>
  <div class="home row">
    <div class="col">
      <table class="table table-bordered">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Make</th>
            <th scope="col">Model</th>
            <th scope="col">Year</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="vehicle in vehicles.vehicle" :key="vehicle.id">
            <td>{{vehicle.make}}</td>
            <td>{{vehicle.model}}</td>
            <td>{{vehicle.year}}</td>
            <td><a v-on:click="deleteVehicle(vehicle.id)">&#10007;</a></td>
          </tr>
        </tbody>
      </table>
      <ul>
        <li v-for="page in vehicles.pages" :key="page">
          <a v-on:click="pabination(page)">{{page}}</a>
        </li>
      </ul>
    </div>   
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      searchString: null,
      vehicles: []
    };
  },
  created() {
    this.fetchVehicles();
  },
  watch: {
    searchString: {
      deep: true,
      handler: function(string) {
          this.filterVehicles(string)
      }
    }
  },
  methods: {
    fetchVehicles() {
        fetch("http://localhost:3000/vehicle/1", {"method": "GET"}).then(async response => this.vehicles = await response.json())
    },
    filterVehicles(data) {
      fetch(`http://localhost:3000/vehicle/1/${data}`, {"method": "GET"}).then(async response => this.vehicles = await response.json())
    },
    pabination(page) {
      if(this.searchString === null){
        fetch(`http://localhost:3000/vehicle/${page}/`, {"method": "GET"}).then(async response => this.vehicles = await response.json())
      } else {
        fetch(`http://localhost:3000/vehicle/${page}/${this.searchString}`, {"method": "GET"}).then(async response => this.vehicles = await response.json())
      }
      
    },
    deleteVehicle(id) {
      console.log(id)
      fetch(`http://localhost:3000/vehicle/${id}/delete`, {"method": "DELETE"}).then(async response => this.vehicles = await response.json())
    }
  }
};
</script>
