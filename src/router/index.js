import Vue from 'vue'
import Router from 'vue-router'
import DetectionStep1 from '@/components/DetectionStep1'
import DetectionStep2 from '@/components/DetectionStep2'
import DetectionStep3 from '@/components/DetectionStep3'
import DetectionStep4 from '@/components/DetectionStep4'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/detection/step1',
      name: 'detection_step1',
      component: DetectionStep1
    },
    {
      path: '/detection/step2',
      name: 'detection_step2',
      component: DetectionStep2
    },
    {
      path: '/detection/step3',
      name: 'detection_step3',
      component: DetectionStep3
    },
    {
      path: '/detection/step4',
      name: 'detection_step4',
      component: DetectionStep4
    }
  ]
})
