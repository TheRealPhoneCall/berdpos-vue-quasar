<template>
  <div class="layout-padding">
    <!-- your content -->
    <q-data-table
      :data="data"
      :config="config"
      :columns="columns"
    >
      <!-- Custom renderer for "message" column -->
      <template slot="col-message" slot-scope="cell">
        <span class="light-paragraph">{{cell.data}}</span>
      </template>
      <!-- Custom renderer for "source" column -->
      <template slot="col-source" slot-scope="cell">
        <span v-if="cell.data === 'Audit'" class="label text-white bg-primary">
          Audit
          <q-tooltip>Some data</q-tooltip>
        </span>
        <span v-else class="label text-white bg-negative">{{cell.data}}</span>
      </template>
      <!-- Custom renderer for "action" column with button for custom action -->
      <template slot='col-action' slot-scope='cell'>
        <q-btn color="primary" @click='doSomethingMethod(cell.row.id)'>View</q-btn>
      </template>
      <!-- Custom renderer when user selected one or more rows -->
      <template slot="selection" slot-scope="selection">
        <q-btn color="primary" @click="changeMessage(selection)">
          <i>edit</i>
        </q-btn>
        <q-btn color="primary" @click="deleteRow(selection)">
          <i>delete</i>
        </q-btn>
      </template>
    </q-data-table>
  </div>
</template>

<script>
import {
  QDataTable,
  QTooltip,
  QBtn
} from 'quasar'

export default {
  components: {
    QDataTable,
    QTooltip,
    QBtn
  },
  data () {
    return {
      config: {
        // [REQUIRED] Set the row height
        rowHeight: '50px',
        // (optional) Title to display
        title: 'Data Table',
        // (optional) No columns header
        noHeader: false,
        // (optional) Display refresh button
        refresh: true,
        // (optional)
        // User will be able to choose which columns
        // should be displayed
        columnPicker: true,
        // (optional) How many columns from the left are sticky
        leftStickyColumns: 0,
        // (optional) How many columns from the right are sticky
        rightStickyColumns: 2,
        // (optional)
        // Styling the body of the data table;
        // "minHeight", "maxHeight" or "height" are important
        bodyStyle: {
          maxHeight: '500px'
        },
        // (optional) By default, Data Table is responsive,
        // but you can disable this by setting the property to "false"
        responsive: true,
        // (optional) Use pagination. Set how many rows per page
        // and also specify an additional optional parameter ("options")
        // which forces user to make a selection of how many rows per
        // page he wants from a specific list
        pagination: {
          rowsPerPage: 15,
          options: [5, 10, 15, 30, 50, 500]
        },
        // (optional) Select one or more rows for an action
        // "single" adds a column with radio buttons for single row selection
        // "multiple" adds a column with checkboxes for multiple row selection
        // omitting the property will result in no selection column at all
        selection: 'multiple',
        // (optional) Override default messages when no data is available
        // or the user filtering returned no results.
        messages: {
          noData: '<i>warning</i> No data available to show.',
          noDataAfterFiltering: '<i>warning</i> No results. Please refine your search terms.'
        },
        // (optional) Override default labels. Useful for I18n.
        labels: {
          columns: 'Coluuuuumns',
          allCols: 'Eeeeeeeeevery Cols',
          rows: 'Rooows',
          selected: {
            singular: 'item selected.',
            plural: 'items selected.'
          },
          clear: 'clear',
          search: 'Search',
          all: 'All'
        }
      },
      columns: [
        {
          // [REQUIRED] Column name
          label: 'ID',
          // [REQUIRED] Row property name
          field: 'id',
          // [REQUIRED] Column width
          width: '10%',
          // // (optional) Column CSS style
          // style: {color: '#ff09fa'},
          // // "style" can be a function too if you want to apply
          // // certain CSS style based on cell value:
          // // style (cell_value) { return .... }
          // // (optional) Column CSS classes
          // classes: 'bg-primary',
          // // "classes" can be a function too if you want to apply
          // // certain CSS class based on cell value:
          // // classes (cell_value) { return .... }
          // // (optional) Can filter/search be applied to this column?
          filter: true,
          // (optional) Sortable column?
          // If yes, then also specify `type` prop to know how to sort
          sort: true,
          // Type required if using sort.
          // Available values: "string", "number", "date", "boolean"
          type: 'string'
        },
        {
          // [REQUIRED] Column name
          label: 'Date',
          // [REQUIRED] Row property name
          field: 'isodate',
          // [REQUIRED] Column width
          width: '30%',
          // (optional) Column CSS style
          // style: {color: '#ff09fa'},
          // // "style" can be a function too if you want to apply
          // // certain CSS style based on cell value:
          // // style (cell_value) { return .... }
          // // (optional) Column CSS classes
          // classes: 'bg-primary',
          // // "classes" can be a function too if you want to apply
          // // certain CSS class based on cell value:
          // // classes (cell_value) { return .... }
          // // (optional) Can filter/search be applied to this column?
          filter: true,
          // (optional) Sortable column?
          // If yes, then also specify `type` prop to know how to sort
          sort (a, b) {
            return (new Date(a)) - (new Date(b))
          },
          // Type required if using sort.
          // Available values: "string", "number", "date", "boolean"
          type: 'string',
          // (optional)
          // use a formatter for this column;
          // transforms original String in another String
          format (value, row) {
            return new Date(value).toLocaleString()
          }
        },
        {
          // [REQUIRED] Column name
          label: 'Message',
          // [REQUIRED] Row property name
          field: 'text',
          // [REQUIRED] Column width
          width: '60%',
          // (optional) Column CSS style
          // style: {color: '#ff09fa'},
          // // "style" can be a function too if you want to apply
          // // certain CSS style based on cell value:
          // // style (cell_value) { return .... }
          // // (optional) Column CSS classes
          // classes: 'bg-primary',
          // // "classes" can be a function too if you want to apply
          // // certain CSS class based on cell value:
          // // classes (cell_value) { return .... }
          // // (optional) Can filter/search be applied to this column?
          filter: true,
          // (optional) Sortable column?
          // If yes, then also specify `type` prop to know how to sort
          sort: true,
          // Type required if using sort.
          // Available values: "string", "number", "date", "boolean"
          type: 'string'
        }
      ],
      data: [
        {
          id: 1,
          date: '21-10-2016',
          msg: 'Some message'
        },
        {
          id: 2,
          date: '21-11-2016',
          msg: 'Another msg'
        },
        {
          id: 1,
          date: '21-12-2016',
          msg: 'Another msg again'
        }
      ]
    }
  }
}
</script>

<style>
</style>