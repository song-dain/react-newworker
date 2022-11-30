import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ApproverChoiceModalCSS from './ApproverChoiceModal.module.css';
import { callEmpListAPI } from '../../api/ApprovalAPICalls';


function ApproverChoiceModal({approverChoiceModal, selectApprover, setSelectApprover, appLines, setAppLines, setApproverChoiceModal}) {
//값이 변경 되는 상황에 체크박스에 눌러진 상황에 저 appLine에 결재순번과, employeeNo라고 하는 숫자를 담는다.
    const dispatch = useDispatch();
    const employee = useSelector(state => state.approvalReducer);
    const [ isChange, setIsChange ] = useState(10);
    const [ checkedInputs, setCheckedInputs ] = useState([]);

    const [ lineNum, setLineNum ] = useState(1);


    useEffect(
        () => {
            dispatch(callEmpListAPI({
                depNo : isChange
            }));
        }
        , [isChange]
    )

    const selectDept = (dep) => {
        dispatch(callEmpListAPI({
            depNo : dep
        }));
    
        setIsChange(dep);
    }


    const selectEmp = (emp) => {
         setAppLines(
             [...appLines, {
                employeeNo : emp.employeeNo,
                employeeName : emp.employeeName,
                appLineTurn : lineNum
             }]
         )
         setLineNum(
            lineNum + 1
         )
         //LineNo 값을 한번쓰면 1씩 증가(AppLineNo 세팅하는 용)

    }
    console.log("appLines : ", appLines);

    // const onChangecheckHandler = (e) => {
    //     setCheckedInputs(lineNum)
    // };


    console.log(approverChoiceModal);

    return(
        <div className={ ApproverChoiceModalCSS.modal}>
            <div className={ ApproverChoiceModalCSS.modalContainer }>
                결재자 선택
                <ul>
                    <li onClick={ () => selectDept(10) } className={ ApproverChoiceModalCSS.depCheck }>인사팀</li>
                    <li onClick={ () => selectDept(20) } className={ ApproverChoiceModalCSS.depCheck }>총무팀</li>
                    <li onClick={ () => selectDept(30) } className={ ApproverChoiceModalCSS.depCheck }>영업팀</li>
                    <li onClick={ () => selectDept(40) } className={ ApproverChoiceModalCSS.depCheck }>IT사업팀</li>
                </ul>
                <table>
                    <thead>
                        <tr>
                            <th>선택</th>
                            <th>이름</th>
                        </tr>
                    </thead>
                <tbody>
                {
                    Array.isArray(employee) && employee.map((
                        emp =>
                            <div key={emp.employeeNo}>
                                <td>
                                    <input type="checkbox" name={emp.employeeName} onClick={ () => selectEmp(emp)} /*onChange={ onChangecheckHandler }*//>
                                </td>
                                <td>{emp.employeeName}</td>
                            </div>
                    ))
                }
            </tbody>
            <tbody>
                결재자 확인
            {
                appLines.map((appLines) =>
                    <li>
                        {appLines.employeeName}
                    </li>
                )
            }
            </tbody>
            </table>
            <button onClick={() => setApproverChoiceModal(false) }>확인</button>
            </div>
        </div>

    );




}

export default ApproverChoiceModal;