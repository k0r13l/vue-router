import { createWebHistory, createRouter } from 'vue-router';

import ProfessorComponent from './components/Professor/ProfessorComponent.vue';
import ProfessorAComponent from './components/Professor/ProfessorAComponent.vue';
import ProfessorBComponent from './components/Professor/ProfessorBComponent.vue';
import ProfessorCComponent from './components/Professor/ProfessorCComponent.vue';

import CourseComponent from './components/Course/CourseComponent.vue';
import CourseAComponent from './components/Course/CourseAComponent.vue';
import CourseBComponent from './components/Course/CourseBComponent.vue';
import CourseCComponent from './components/Course/CourseCComponent.vue';


import StudentComponent from './components/Student/StudentComponent.vue';
import StudentAComponent from './components/Student/StudentAComponent.vue';
import StudentBComponent from './components/Student/StudentBComponent.vue';
import StudentCComponent from './components/Student/StudentCComponent.vue';
import HomeComponent from './views/HomeComponent.vue';
import LoginComponent from './components/Login/LoginComponent.vue'
import store from './store/store';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomeComponent,
		children: [
			{ 
				path: '/login',
				name: 'Login',
				component: LoginComponent,
			},
			{

				path: '/professor',
				name: 'Professor',
				component: ProfessorComponent,
				meta: { requiresAuth: true },
				children: [
					{
						path: 'professor_a',
						name: 'professora',
						component: ProfessorAComponent,
					},
					{
						path: 'professor_b',
						name: 'professorb',
						component: ProfessorBComponent,
					},
					{
						path: 'professor_c',
						component: ProfessorCComponent,
						name: 'professorc'
					},
				]
			},
			{
				path: '/course',
				name: 'Course',
				component: CourseComponent,
				meta: { requiresAuth: true },
				children: [
					{
						path: 'course_a',
						name: 'coursea',
						component: CourseAComponent,
					},
					{
						path: 'course_b',
						name: 'courseb',
						component: CourseBComponent,
					},
					{
						path: 'course_c',
						name: 'coursec',
						component: CourseCComponent,
					},
				]
			},
			{
				path: '/student',
				name: 'Student',
				component: StudentComponent,
				meta: { requiresAuth: true },
				children: [
					{
						path: 'student_a',
						name: 'studenta',
						component: StudentAComponent,
					},
					{
						path: 'student_b',
						name: 'studentb',
						component: StudentBComponent,
					},
					{
						path: 'student_c',
						name: 'studentc',
						component: StudentCComponent,
					},
				]
			},
		]
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});
router.beforeEach((to, from, next) => {
	if (to.matched.some(route => route.meta.requiresAuth)) {

		if (!store.state.isLoggedIn) {
			next('/login')
		} else {
			next();
		}
	} else {

		next();
	}

})

export default router;