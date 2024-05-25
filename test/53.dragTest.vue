<template>
    <div class="draggable-container">
      <div
        :class="['draggable-list', item.listDragStatus ? 'disabled' : '']"
        v-for="(item, index) in lists"
        :key="'list' + index"
      >
        <h4>{{ item.name }}</h4>
        <draggable
          :list="item.list"
          group="attribute"
          @start="onStart(item.list, index)"
          @end="onEnd"
          @change="onChange"
          :move="checkMove"
          :disabled="item.listDragStatus"
          ghost-class="ghost"
          animation="300"
        >
          <div v-for="(element, index2) in item.list" :key="'element' + index2" class="drag-item">
            {{ element }}
          </div>
        </draggable>
      </div>
    </div>
  </template>
  <script>
  import draggable from 'vuedraggable'
  import { cloneDeep } from 'lodash'
  export default {
    name: 'DraggableTransfer',
    components: {
      draggable,
    },
    props: {
      fieldList: {
        type: Array,
        default: () => [],
      },
      xAxisArr: {
        type: Array,
        default: () => [],
      },
      yAxisArr: {
        type: Array,
        default: () => [],
      },
      groupArr: {
        type: Array,
        default: () => [],
      },
    },
  
    data() {
      return {
        dragging: false,
        lists: [
          {
            name: '字段列表',
            listDragStatus: false,
            list: cloneDeep(this.fieldList),
          },
          {
            name: 'x轴',
            listDragStatus: false,
            list: [],
          },
          {
            name: 'y轴',
            listDragStatus: false,
            list: [],
          },
          {
            name: '分组属性',
            listDragStatus: false,
            list: [],
          },
        ],
      }
    },
    mounted() {
      console.log('🚀 ~ lists:', this.lists)
      console.log('🚀 ~ groupArr:', this.groupArr)
      console.log('🚀 ~ yAxisArr:', this.yAxisArr)
      console.log('🚀 ~ xAxisArr:', this.xAxisArr)
    },
    methods: {
      checkMove() {
        console.log('🚀 ~ checkMove ~ event:', arguments)
      },
      onStart(list, index) {
        this.dragging = true
        console.log('🚀 ~ onStart ~ event:', list[index].id)
        if (list[index].id === 2) {
          this.lists[2].listDragStatus = true
        }
      },
      onEnd(event) {
        this.dragging = false
        this.lists.forEach((item) => (item.listDragStatus = false))
        console.log('🚀 ~ onEnd ~ event:', event)
      },
      onChange(arg1, arg2) {
        console.log('🚀 ~ onChange ~ arg1:', arg1)
        console.log('🚀 ~ onChange ~ arg2:', arg2)
      },
    },
  }
  </script>
  <style scoped>
  .draggable-container {
    display: flex;
    justify-content: space-around;
  }
  .draggable-list {
    border: 1px solid #ccc;
    padding: 10px;
    flex: 1;
  }
  .drag-item {
    padding: 5px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
    background-color: #fff;
    cursor: grab;
  }
  .ghost {
    opacity: 0.5;
    border: 1px solid palegreen;
    cursor: grab;
  }
  .disabled {
    opacity: 0.5;
    border: 1px dashed red;
  }
  </style>
  