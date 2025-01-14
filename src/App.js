import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Main from "./pages/Main";
import Login from "./pages/employee/Login";
import Notice from "./pages/notice/Notice";
import NoticeDetail from "./pages/notice/NoticeDetail";
import NoticeRegistration from "./pages/admin/NoticeRegistration";

import SendMessage from "./pages/message/SendMessage";
import ReceiveMessageBox from "./pages/message/ReceiveMessageBox";
import SendMessageBox from "./pages/message/SendMessageBox";
import ImpoMessageBox from "./pages/message/ImpoMessageBox";
import BinMessageBox from "./pages/message/BinMessageBox";
import AppCSS from "./App.module.css";
import AttStart from "./pages/att/Start";
import IdInquiry from "./pages/employee/IdInquiry";
import IdInquiryResult from "./pages/employee/IdInquiryResult";
import PwdInquiry from "./pages/employee/PwdInquiry";
import EmployeeRegist from "./pages/employee/EmployeeRegist";
import ApprovalRegist from "./pages/approval/ApprovalRegist";
import Calendar from "./pages/calendar/calendar";
import EmployeeList from "./pages/employee/EmployeeList";
import EmployeeDetail from "./pages/employee/EmployeeDetail";
import RestRegist from "./pages/rest/RestRegist";
import NewSchedule from "./pages/calendar/NewSchedule";
import Survey from "./pages/survey/Survey";
import SurveyDetail from "./pages/survey/SurveyDetail";
import SurveyRegistration from "./pages/admin/SurveyRegistration";
import PwdInquiryResult from "./pages/employee/PwdInquiryResult";
import PwdUpdate from "./pages/employee/PwdUpdate";
import PwdUpdateResult from "./pages/employee/PwdUpdateResult";
import DrafterApprovalList from "./pages/approval/DrafterApprovalList";
import DrafterApprovalDetail from "./pages/approval/DrafterApprovalDetail";
import ApproverApprovalList from "./pages/approval/ApproverApprovalList";
import ApproverApprovalDetail from "./pages/approval/ApproverApprovalDetail";
import SurveyIng from "./pages/survey/SurveyIng";
import RestList from "./pages/rest/RestList";
import RestDetail from "./pages/rest/RestDetail";
import RestOkList from "./pages/rest/RestOkList";
import RestOkDetail from "./pages/rest/RestOkDetail";



function App() {

  return (
    <BrowserRouter>
      <div className={AppCSS.container} >

        <Routes>
          <Route path="/" element={<Layout />} >

            <Route index element={<Main />} />

            <Route path="employee/regist" element={<EmployeeRegist />} />
            
            <Route path="approval/regist" element={<ApprovalRegist/>} />
            <Route path="approval/draft" element={<DrafterApprovalList />} />
            <Route path="approval/drafterDetail/:appNo" element={ <DrafterApprovalDetail />} />
            <Route path="approval/approver" element={<ApproverApprovalList />} />
            <Route path="approval/approverDetail/:appNo" element={ <ApproverApprovalDetail/>} />
            
            <Route path="emp/employeeList" element={ <EmployeeList/> }/>
            <Route path="emp/employeeList/detail-management/:employeeNo" element={ <EmployeeDetail/> }/>

            {/* 전사공지부분 */}
            <Route path="Notice" element={<Notice />} />
            <Route path="noticeDetail/:notNo" element={<NoticeDetail/>} />
            <Route path="notice-registration" element={<NoticeRegistration />} />
            

            <Route path="message/write" element={<SendMessage />} />
            <Route path="message/receive" element={<ReceiveMessageBox />} />
            <Route path="message/send" element={<SendMessageBox />} />
            <Route path="message/impo" element={<ImpoMessageBox />} />
            <Route path="message/bin/receive" element={<BinMessageBox />} />

            <Route path="calendar" element={ <Calendar/> }/>
            <Route path="calendar/add" element={ <NewSchedule/> }/>
            
            <Route path="att/start" element={<AttStart />} />

            {/* 설문조사부분 */}
            <Route path="Survey" element={<Survey />} />
            <Route path="surveyDetail/:surNo" element={<SurveyDetail/>} />
            <Route path="survey-registration" element={<SurveyRegistration />} />
            <Route path="survey/ing" element={<SurveyIng/>}/>
            


            {/* 휴가부분 */}
            <Route path="rest/regist" element={<RestRegist/>} />
            <Route path="rest/list" element={<RestList/>} />
            <Route path="rest/list/detail/:restNo" element={<RestDetail/>} />
            <Route path="rest/list/admin" element={<RestOkList/>} />
            <Route path="rest/list/admin/detail/:restNo" element={<RestOkDetail/>} />

          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/idInquiry" element={<IdInquiry />} />
          <Route path="/idInquiryResult" element={<IdInquiryResult />} />
          <Route path="/pwdInquiry" element={<PwdInquiry />} />
          <Route path="/pwdInquiryResult" element={<PwdInquiryResult />} />
          <Route path="/pwdUpdate" element={<PwdUpdate />} />
          <Route path="/pwdUpdateResult" element={<PwdUpdateResult />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;