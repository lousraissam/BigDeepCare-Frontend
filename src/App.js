import React, {Component} from 'react';
import Cards from './components/Cards';
import { Search } from './components/Search';
import SignInSide from './components/SignIn';
import { BrowserRouter as Router, Routes, Route,Switch, Navigate, Link  } from 'react-router-dom';

import { DashboardMedecin } from './components/DashboardMedecine';
import { DashboardPatient } from './components/DashboardPatient';
import { DashboardAdmin } from './components/DashboardAdmin';
import { DashboardAidS } from './components/DashboardAidS';
import Mypatients from './components/medecin/Mypatients';
import { AccountProfileDetails } from './components/Profile';
import CreeDossier from './components/medecin/CreeDossier';
import DossierMedical from './components/medecin/DossierMedical';
import ExamenClinique from './components/medecin/ExamenClinique';
import GetEcg from './components/medecin/GetEcg'
import { ProfilAideS } from './components/AideS/ProfileAides';
import CreerMedical from './components/AideS/CreerMedical';
import AllAboutPatient from './components/medecin/AllAboutPatient';
import AddRdv from './components/AideS/AddRdv';
// admin
import AllUsers from './components/Admin/AllUsers';
import AddUser from './components/Admin/AddUser';
import { ProfileAdmin } from './components/Admin/ProfilAdmin';
import AllMedecins from './components/AideS/AllMedecins';
import AllPatients from './components/AideS/AllPatients';
import MesRdv from './components/medecin/MesRdv';

import AllAboutPatienthistory  from './components/medecin/HistoryConsultations/AllAboutPatient';
// import {Antecedent as ant} from './components/medecin/HistoryConsultations/Antecedent'
// import {Billans as bilan} from './components/medecin/HistoryConsultations/Billans';
// import {ExamenClinique as examencl} from './components/medecin/HistoryConsultations/ExamenClinique';
// import {PatientInfo as infoPatien} from './components/medecin/HistoryConsultations/PatientInfo';
// import {Interogatoire as intr} from './components/medecin/Interogatoire';


import { ImageUpload } from './components/medecin/ImageUpload';
class App extends Component{
  
//  state = {
//  monsters: [],
//  searchFiled: ""

// }

//   componentDidMount(){
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(users => this.setState({monsters : users}))
//   }
//   handleChange=(e)=> {
//      this.setState({searchFiled:e.target.value}, () => console.log(this.state))
//     }
  render(){

    // const { monsters, searchFiled} = this.state
    // const filterMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchFiled.toLowerCase()))

    return(
     
    <div>


      <Routes>

      <Route exact={true} path="/" element={<SignInSide />} />

      <Route exact={true} path="/dashboard-medecin" element={<DashboardMedecin />} />
      <Route exact={true} path="/dashboard-AideS" element={<DashboardAidS />} />
      <Route exact={true} path="/dashboard-patient" element={<DashboardPatient />} />
      <Route exact={true} path="/dashboard-admin" element={<DashboardAdmin />} />
      <Route exact={true}  path="/dashboard-medecin/mes-patients" element={<Mypatients />} />
      <Route exact={true} path="/dashboard-medecin/creer-dossier" element={<CreeDossier />} />
      <Route exact={true} path="/dashboard-medecin/dossier-medical" element={<DossierMedical />} />
      <Route exact={true} path="/dashboard-medecin/examen-clinique" element={<ExamenClinique />} />
      <Route exact={true} path="/dashboard-medecin/mes-rdv" element={<MesRdv />} />
      <Route exact={true} path="/mon-profil" element={<AccountProfileDetails />} />
      <Route exact={true} path="/dashboard-medecin/patient" element={<AllAboutPatient />} />
      <Route exact={true} path="/dashboard-medecin/patient/consultations" element={<AllAboutPatienthistory />} />




      <Route exact={true} path="/dashboard-medecin/ecg" element={<GetEcg />} />
      <Route exact={true} path="/dashboard-medecin/ecg_img" element={<ImageUpload />} />

      

      {/* aideS */}
      <Route exact={true} path="/dashboard-aideS/medecins" element={<AllMedecins />} />
      <Route exact={true} path="/dashboard-aideS/patients" element={<AllPatients />} />

      <Route exact={true} path="/dashboard-aideS/creer-medical" element={<CreerMedical />} />
      <Route exact={true} path="/dashboard-aideS/creer-rdv" element={<AddRdv />} />



        {/* admin */}
        <Route exact={true} path="/dashboard-admin/all-users" element={<AllUsers />} />
        <Route exact={true} path="/dashboard-admin/add-user" element={<AddUser />} />
        <Route exact={true} path="/dashboard-admin/mon-profil" element={<ProfileAdmin />} />
        <Route exact={true} path="/dashboard-aideS/mon-profil" element={<ProfilAideS />} />







      </Routes>


   
    {/* <Search handleChange={this.handleChange}
      

        ></Search>
   
      <Cards monsters = {filterMonster}></Cards> */}
    </div>
    )
  }

}


export default App;
