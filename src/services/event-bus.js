import Vue from 'vue'

// Child components can use this to trigger events, such as
// visual notifications, that need to be handled at a higher level
export const EventBus = new Vue({})
