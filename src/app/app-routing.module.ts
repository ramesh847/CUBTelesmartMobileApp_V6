import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgotpwd',
    loadChildren: () => import('./forgotpwd/forgotpwd.module').then( m => m.ForgotpwdPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'userprofile',
    loadChildren: () => import('./userprofile/userprofile.module').then( m => m.UserprofilePageModule)
  },
  {
    path: 'entryscreen',
    loadChildren: () => import('./entryscreen/entryscreen.module').then( m => m.EntryscreenPageModule)
  },
  {
    path: 'mystarcustomers',
    loadChildren: () => import('./mystarcustomers/mystarcustomers.module').then( m => m.MystarcustomersPageModule)
  },
  {
    path: 'zerostarcustomers',
    loadChildren: () => import('./zerostarcustomers/zerostarcustomers.module').then( m => m.ZerostarcustomersPageModule)
  },
  {
    path: 'mysmacustomers',
    loadChildren: () => import('./mysmacustomers/mysmacustomers.module').then( m => m.MysmacustomersPageModule)
  },
  {
    path: 'mynpacustomers',
    loadChildren: () => import('./mynpacustomers/mynpacustomers.module').then( m => m.MynpacustomersPageModule)
  },
  {
    path: 'demandcollection',
    loadChildren: () => import('./demandcollection/demandcollection.module').then( m => m.DemandcollectionPageModule)
  },
  {
    path: 'otheraccounts',
    loadChildren: () => import('./otheraccounts/otheraccounts.module').then( m => m.OtheraccountsPageModule)
  },
  {
    path: 'unitvisitreport',
    loadChildren: () => import('./unitvisitreport/unitvisitreport.module').then( m => m.UnitvisitreportPageModule)
  },
  {
    path: 'uvrsection',
    loadChildren: () => import('./uvrsection/uvrsection.module').then( m => m.UvrsectionPageModule)
  },
  {
    path: 'uvrsectionhistory',
    loadChildren: () => import('./uvrsectionhistory/uvrsectionhistory.module').then( m => m.UvrsectionhistoryPageModule)
  },
  {
    path: 'uvrallsection',
    loadChildren: () => import('./uvrallsection/uvrallsection.module').then( m => m.UvrallsectionPageModule)
  },
  {
    path: 'uvrpof',
    loadChildren: () => import('./uvrpof/uvrpof.module').then( m => m.UvrpofPageModule)
  },
  {
    path: 'modalmycustomer',
    loadChildren: () => import('./modal/modalmycustomer/modalmycustomer.module').then( m => m.ModalmycustomerPageModule)
  },
  {
    path: 'myzerocustomermodal',
    loadChildren: () => import('./modal/myzerocustomermodal/myzerocustomermodal.module').then( m => m.MyzerocustomermodalPageModule)
  },
  {
    path: 'followup-leads',
    loadChildren: () => import('./followup-leads/followup-leads.module').then( m => m.FollowupLeadsPageModule)
  },
  {
    path: 'express-leads',
    loadChildren: () => import('./express-leads/express-leads.module').then( m => m.ExpressLeadsPageModule)
  },
  {
    path: 'rtgs-neft',
    loadChildren: () => import('./rtgs-neft/rtgs-neft.module').then( m => m.RTGSNEFTPageModule)
  },
  {
    path: 'mysmacustomermodal',
    loadChildren: () => import('./modal/mysmacustomermodal/mysmacustomermodal.module').then( m => m.MysmacustomermodalPageModule)
  },
  {
    path: 'my-npacustomermodal',
    loadChildren: () => import('./modal/my-npacustomermodal/my-npacustomermodal.module').then( m => m.MyNPAcustomermodalPageModule)
  },
  {
    path: 'demandcollectionmodal',
    loadChildren: () => import('./modal/demandcollectionmodal/demandcollectionmodal.module').then( m => m.DemandcollectionmodalPageModule)
  },
  {
    path: 'otheraccountmodal',
    loadChildren: () => import('./modal/otheraccountmodal/otheraccountmodal.module').then( m => m.OtheraccountmodalPageModule)
  },
  {
    path: 'expressleadmodal',
    loadChildren: () => import('./modal/expressleadmodal/expressleadmodal.module').then( m => m.ExpressleadmodalPageModule)
  },
  {
    path: 'rtgs-neftmodal',
    loadChildren: () => import('./modal/rtgs-neftmodal/rtgs-neftmodal.module').then( m => m.RtgsNeftmodalPageModule)
  },
  {
    path: 'mywishaddcustomer',
    loadChildren: () => import('./mywishaddcustomer/mywishaddcustomer.module').then( m => m.MywishaddcustomerPageModule)
  },
  {
    path: 'mywishprimarycustomer',
    loadChildren: () => import('./mywishprimarycustomer/mywishprimarycustomer.module').then( m => m.MywishprimarycustomerPageModule)
  },
  {
    path: 'mywishsecondarycustomer',
    loadChildren: () => import('./mywishsecondarycustomer/mywishsecondarycustomer.module').then( m => m.MywishsecondarycustomerPageModule)
  },
  {
    path: 'mywishfollowup',
    loadChildren: () => import('./mywishfollowup/mywishfollowup.module').then( m => m.MywishfollowupPageModule)
  },
  {
    path: 'mywishconversions',
    loadChildren: () => import('./mywishconversions/mywishconversions.module').then( m => m.MywishconversionsPageModule)
  },
  {
    path: 'myassigncallmodal',
    loadChildren: () => import('./modal/myassigncallmodal/myassigncallmodal.module').then( m => m.MyassigncallmodalPageModule)
  },
  {
    path: 'myfollowcallmodal',
    loadChildren: () => import('./modal/myfollowcallmodal/myfollowcallmodal.module').then( m => m.MyfollowcallmodalPageModule)
  },
  {
    path: 'mydiary',
    loadChildren: () => import('./mydiary/mydiary.module').then( m => m.MydiaryPageModule)
  },
  // {
  //   path: 'exceptionreport',
  //   loadChildren: () => import('./exceptionreport/exceptionreport.module').then( m => m.ExceptionreportPageModule)
  // },
  {
    path: 'myassignedcall',
    loadChildren: () => import('./myassignedcall/myassignedcall.module').then( m => m.MyassignedcallPageModule)
  },
  {
    path: 'myfollowupcall',
    loadChildren: () => import('./myfollowupcall/myfollowupcall.module').then( m => m.MyfollowupcallPageModule)
  },
  {
    path: 'commoncall',
    loadChildren: () => import('./commoncall/commoncall.module').then( m => m.CommoncallPageModule)
  },
  {
    path: 'commoncallmodal',
    loadChildren: () => import('./modal/commoncallmodal/commoncallmodal.module').then( m => m.CommoncallmodalPageModule)
  },
  {
    path: 'addinsurance',
    loadChildren: () => import('./addinsurance/addinsurance.module').then( m => m.AddinsurancePageModule)
  },
  {
    path: 'insurancecustomer',
    loadChildren: () => import('./insurancecustomer/insurancecustomer.module').then( m => m.InsurancecustomerPageModule)
  },
  {
    path: 'followupleadmodal',
    loadChildren: () => import('./modal/followupleadmodal/followupleadmodal.module').then( m => m.FollowupleadmodalPageModule)
  },
  {
    path: 'myassignedvisits',
    loadChildren: () => import('./myassignedvisits/myassignedvisits.module').then( m => m.MyassignedvisitsPageModule)
  },
  {
    path: 'myfollowupvisits',
    loadChildren: () => import('./myfollowupvisits/myfollowupvisits.module').then( m => m.MyfollowupvisitsPageModule)
  },
  
// ramesh code?

{
  path: 'myassignedvisits',
  loadChildren: () => import('./myassignedvisits/myassignedvisits.module').then( m => m.MyassignedvisitsPageModule)
},
{
  path: 'myfollowupvisitmodal',
  loadChildren: () => import('./modal/myfollowupvisitmodal/myfollowupvisitmodal.module').then( m => m.MyfollowupvisitmodalPageModule)
},
{
  path: 'myfollowupvisitendmodel',
  loadChildren: () => import('./modal/myfollowupvisitendmodel/myfollowupvisitendmodel.module').then( m => m.MyfollowupvisitendmodelPageModule)
},
{
  path: 'commonvisitmodel',
  loadChildren: () => import('./modal/commonvisitmodel/commonvisitmodel.module').then( m => m.CommonvisitmodelPageModule)
},
{
  path: 'assignedvisitupdatemodal',
  loadChildren: () => import('./modal/assignedvisitupdatemodal/assignedvisitupdatemodal.module').then( m => m.AssignedvisitupdatemodalPageModule)
},
{
  path: 'assignedvisithistorymodal',
  loadChildren: () => import('./modal/assignedvisithistorymodal/assignedvisithistorymodal.module').then( m => m.AssignedvisithistorymodalPageModule)
},
  {
    path: 'heatmap',
    loadChildren: () => import('./heatmap/heatmap.module').then( m => m.HeatmapPageModule)
  },
  {
    path: 'myfollowupcallconnect',
    loadChildren: () => import('./modal/myfollowupcallconnect/myfollowupcallconnect.module').then( m => m.MyfollowupcallconnectPageModule)
  },
  {
  path: 'exceptionreport',
  loadChildren: () => import('./exceptionreport/exceptionreport.module').then( m => m.ExceptionreportPageModule)
  },
  {
    path: 'myplanner',
    loadChildren: () => import('./myplanner/myplanner.module').then( m => m.MyplannerPageModule)
  },
  {
    path: 'mywishsecondarymodal',
    loadChildren: () => import('./modal/mywishsecondarymodal/mywishsecondarymodal.module').then( m => m.MywishsecondarymodalPageModule)
  },
  {
    path: 'mywishprimarymodal',
    loadChildren: () => import('./modal/mywishprimarymodal/mywishprimarymodal.module').then( m => m.MywishprimarymodalPageModule)
  },
  {
    path: 'mywishfollowupmodal',
    loadChildren: () => import('./modal/mywishfollowupmodal/mywishfollowupmodal.module').then( m => m.MywishfollowupmodalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
