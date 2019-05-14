 <template>
  <v-card>
    <v-card-title>
      People
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <h3 id="errorMessage" color="error" v-if="databseConnectionError">HAHA no database lol</h3>
    <v-data-table
      :headers="headers"
      :items="people"
      :search="search"
    >
      <template v-slot:items="props">
        <td class="text-xs-left">{{ props.item.firstName }}</td>
        <td class="text-xs-left">{{ props.item.lastName }}</td>
        <td class="text-xs-left">{{ props.item.email }}</td>
      </template>
      <v-alert v-slot:no-results :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
  </v-card>
</template>

<script>
import axios from 'axios'
export default {
  name: 'PeopleTable',
  data () {
    return {
      search: '',
      databseConnectionError: false,
      headers: [
        { text: 'First Name', value: 'firstName' },
        { text: 'Last Name', value: 'lastName' },
        { text: 'Email', value: 'email' }
      ],
      people: []
    }
  },
  mounted () {
    axios.get('http://localhost:5656/person/').then(
      response => {
        this.people = response.data
      }).catch(error => {
      error.catch()
      this.databseConnectionError = true
    })
  }
}

</script>

<style>
#errorMessage {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #d81b1b;
}
</style>
