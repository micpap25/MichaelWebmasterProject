import Vue from "vue";
import Router from "vue-router";
import store from "../store/store";
import Home from "@/components/Home";
import Bylaws from "@/components/info/Bylaws";
import Requirements from "@/components/info/Requirements";
import ChangeLog from "@/components/info/ChangeLog";
import Login from "@/components/auth/Login";
import Forgot from "@/components/auth/Forgot";
import Reset from "@/components/auth/Reset";
import Tutor from "@/components/tutoring/Tutor";
import GetTutored from "@/components/tutoring/GetTutored";
import CommServe from "@/components/logging/CommServe";
import TutorHours from "@/components/logging/TutorHours";
import Feedback from "@/components/feedback/Feedback";

Vue.use(Router);

function requireAuth(to, from, next) {
  if (!store.state.isLoggedIn) {
    window.location.href = "/#/login";
  } else {
    next();
  }
}

export default new Router({
  // mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/forgot",
      name: "forgot",
      component: Forgot,
    },
    {
      path: "/reset/:token",
      name: "reset",
      component: Reset,
    },
    {
      path: "/tutoring/edit",
      name: "tutor",
      component: Tutor,
      beforeEnter: requireAuth,
    },
    {
      path: "/tutoring/get",
      name: "get-tutored",
      component: GetTutored,
    },
    {
      path: "/info/bylaws",
      name: "bylaws",
      component: Bylaws,
    },
    {
      path: "/info/requirements",
      name: "requirements",
      component: Requirements,
    },
    {
      path: "/info/changelog",
      name: "changelog",
      component: ChangeLog,
    },
    {
      path: "/logging/commserve",
      name: "logcommserve",
      component: CommServe,
    },
    {
      path: "/logging/tutor",
      name: "logtutor",
      component: TutorHours,
    },
    {
      path: "/feedback", 
      name: "feedback",
      component: Feedback,
    }, 
  ],
});
