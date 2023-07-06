import { createStore } from 'vuex'

const dataURL = "https://laiquah.github.io/eomp_server/database/data.json";

export default createStore({
  state: {
    projects: null,
    testimonials: null,
    education : null,
    softskills : null,
    hardskills : null,
    experience : null,
  },
  getters: {
  },
  mutations: {
    setProjects(state, value) {
      state.projects = value
    },
    setTestimonials(state, value) {
      state.testimonials = value
    },
    setEducation(state, value) {
      state.education = value
    },
    setSoftskills(state, value) {
      state.softskills = value
    },
    setHardskills(state, value) {
      state.hardskills = value
    },
    setExperience(state, value) {
      state.experience = value
    }
  },
  actions: {
    async fetchProjects(context) {
      try {
        let res = await fetch(dataURL);
        let {projects} = await res.json();
        if (projects) {
          context.commit("setProjects", projects)
        }else {
          context.commit("setProjects", projects)
        }
      } 
      catch (e) {
        console.log(e.message)
      }
    },
    async fetchTestimonials(context) {
      try{
        let res = await fetch(dataURL);
        let {testimonials} = await res.json();
        if (testimonials) {
          context.commit("setTestimonials", testimonials)
        }else {
          context.commit("setTestimonials", testimonials)
        }
      }
      catch (e) {
        console.log(e.message)
      }
    },
    async fetchEducation(context) {
      try{
        let res = await fetch(dataURL);
        let {education} = await res.json();
        if (education) {
          context.commit("setEducation", education)
        }else {
          context.commit("setEducation", education)
        }
      }
      catch (e) {
        console.log(e.message)
      }
    },
    async fetchSoftskills(context) {
      try{
        let res = await fetch(dataURL);
        let {softskills} = await res.json();
        if (softskills) {
          context.commit("setSoftskills", softskills)
        }else {
          context.commit("setSoftskills", softskills)
        }
      }
      catch (e) {
        console.log(e.message)
      }
    },
    async fetchHardskills(context) {
      try{
        let res = await fetch(dataURL);
        let {hardskills} = await res.json();
        if (hardskills) {
          context.commit("setHardskills", hardskills)
        }else{
          context.commit("setHardskills", hardskills)
        }
      }
      catch (e) {
        console.log(e.message)
      }
    },
    async fetchExperience(context) {
      try{
        let res = await fetch(dataURL);
        let {experience} = await res.json();
        if (experience) {
          context.commit("setExperience", experience)
        }else {
          context.commit("setExperience", experience)
        }
      }
      catch (e) {
        console.log(e.message)
      }
    }
  },
  modules: {
  }
})
