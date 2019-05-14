<template>
  <div class="about">
    <h1>This is an about page</h1>
      <PeopleTable margin/>
  </div>
</template>

<script>
import PeopleTable from '@/components/PeopleTable.vue'

export default {
  name: 'About',
  components: {
    PeopleTable
  }
}
</script>
