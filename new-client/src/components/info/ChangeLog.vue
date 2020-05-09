<template>
  <div>
    <b-container class="text-light">
      <h4>Change Log</h4>
      <h5>
        5/9/2020:
      </h5>
      <ul>
        <li> 
          <strong>Created the Change Log to record changes in the website.</strong>
        </li>
        <li> 
          <strong>Created a Feedback Form. Access it from the Navigation Bar.</strong>
        </li>
        <li> 
          <strong>Users will stay logged in even if they refresh or leave the website.</strong>
        </li>
        <li>
          Fixed the "Get Tutored" button on the Home Page for users who have not logged in yet.
        </li>
        <li>
          Added a "Get Tutored" button on the Home Page for users who are logged in.
        </li>
        <li>
          Changed the color of the "Log Tutoring" button on the Home Page.
        </li>
      </ul>
      <h5>
          Upcoming Features!
      </h5>
      <ul>
        <li> 
          <strong>Filter which hours you want to see tutors for on the Get Tutored page.</strong>
        </li>
        <li> 
          <strong>Give a short desription of yourself for others to see when they search for tutors on the Edit Tutoring page.</strong>
        </li>
      </ul>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: "requirements",
    data() {
      return {};
    },
  };
</script>

<style lang="scss" scoped>
  .container {
    margin-top: 60px;
  }
</style>
