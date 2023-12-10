<template>
  <div class="p1 box-border">
    <view class="py-2 flex justify-between items-center">
      <div v-if="currentYearAndMonth">{{ currentYearAndMonth }}</div>
      <div class="flex items-center justify-end flex-auto">
        <div @click="changeMonth('pre')" class="text-5 i-uil:angle-left"></div>
        <div @click="changeMonth('next')" class="text-5 i-uil:angle-right"></div>
        <span class="text-3 ml-2" :class="[color.value == 'dark' ? 'i-uil:moon' : 'i-uil:sun']"
          @click="toggleColor"></span>
      </div>
    </view>
    <div class="days">
      <div class="day p1" v-for="item in days" :key="item.date" @click="toDetail(item)">
        <div class="text-center">{{ item.day }}</div>
        <div class="p-1">
          <div class="w-full pl-10px overflow-hidden text-nowrap whitespace-nowrap text-ellipsis">看书</div>
          <div class="w-full pl-10px overflow-hidden text-nowrap whitespace-nowrap text-ellipsis">看书看书看书看书看书看书看书看书</div>
          <div class="w-full pl-10px overflow-hidden text-nowrap whitespace-nowrap text-ellipsis">看书</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const color = useColorMode()
const toggleColor = () => {
  color.value = color.value == 'light' ? 'dark' : 'light'
}
const date = ref<BaseDate | null>(null)
const currentYearAndMonth = computed(() => {
  return date.value ? date.value.year + '-' + date.value.month : ''
})
const days = computed(() => {
  return date.value ? getdays(date.value) : getdays()
})
const changeMonth = (type: string) => {
  if (date.value == null) return
  let { year, month } = date.value
  let d = null
  if (type == 'pre') {
    d = getLastMonth({ year, month })
  }
  if (type == 'next') {
    d = getNextMonth({ year, month })
  }
  if (d) {
    date.value = useDate({ ...d, day: 1 })
  }
}
const toDetail = (item:any) => {
  const router = useRouter()
  router.push({ path: '/details', query: { date: item.date } })
}
onMounted(() => {
  date.value = useDate()
})
</script>

<style lang="css" scoped>
.action {
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

div {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.days {
  height: calc(100vh - 50px);
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  flex-wrap: wrap;
}

.day {
  width: calc(100% / 7);
  flex-shrink: 0;
  border: 1px solid #eee;
  /* height: 100px; */
}
</style>
