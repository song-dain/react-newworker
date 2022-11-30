import NoticeRegistrationCSS from './NoticeRegistration.module.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { callSurveyRegistAPI } from '../../api/SurveyAPICalls';


function SurveyRegistration() {



    const dispatch = useDispatch();
    const navigate = useNavigate();
    const imageInput = useRef();
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [Content, setContent] = useState();
    const [form, setForm] = useState({
        surTitle: '',
        surContent: '',
        surStartDate: '',
        surEndDate: '',
        ansContent: ''

    });



    // 대상을 선택하는 select 옵션
    const Options = [
        { key: 1, value: "모든 부서" },
        { key: 2, value: "IT사업팀" },
        { key: 3, value: "인사팀" },
        { key: 4, value: "총무팀" },
        { key: 5, value: "영업팀" },
    ]

    const onChangeSelectHandler = (e) => {
        setContent(e.currentTarget.value)
    }

    useEffect(() => {
        // image 값이 바뀔 때마다 랜더링 -> 파일 첨부가 다시 일어날 때마다 preview 보여주기
        if (image) {
            const fileReader = new FileReader();
            fileReader.onload = (e) => {
                const { result } = e.target;
                if (result) {
                    setImageUrl(result);
                }
            }
            fileReader.readAsDataURL(image);
        }
    },
        [image]);

    /* 입력 양식의 값 변경될 때 */
    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    /* 이미지 첨부 버튼 클릭 이벤트 */
    const onClickImageUpload = () => {
        imageInput.current.click();
    }

    /* 파일 첨부 시 동작하는 이벤트 */
    const onChangeImageUpload = (e) => {

        const image = e.target.files[0];

        setImage(image);

    }
    /* 공지 등록 버튼 클릭 이벤트 */
    const onClickSurveyRegistrationHandler = () => {

        const formData = new FormData();

        formData.append("surTitle", form.surTitle);     //설문제목
        formData.append("surContent", form.surContent); //설문설명
        formData.append("surStartDate", form.surStartDate); //설문시작일
        formData.append("surEndDate", form.surEndDate); //설문종료일
        formData.append("ansContent", form.ansContent); //질문항목



        if (image) {
            formData.append("surveyImage", image);
        }

        dispatch(callSurveyRegistAPI({
            form: formData
        }));
        alert('설문이 등록되었습니다.');
        navigate(`/Survey`, { replace: true });
        // window.location.reload();
    }

    return (
        <div >
            <h1>설문조사</h1>

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                설문제목 : <input
                                    name='surTitle'
                                    placeholder='제목을 입력하세요.'

                                    onChange={onChangeHandler}
                                /></th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr >
                            <td>

                                설문설명 :
                                <input
                                    name='surContent'
                                    placeholder='내용을 입력하세요.'

                                    onChange={onChangeHandler}
                                />

                            </td>

                        </tr>
                        <tr >
                            <td>

                                설문기간 :
                                <input
                                    type="date"
                                    name='startDate'


                                    onChange={onChangeHandler}
                                />
                                ~
                                <input
                                    type="date"
                                    name='endDate'


                                    onChange={onChangeHandler}
                                />

                            </td>

                        </tr>
                        <tr>
                            <td>

                                설문대상 :
                                <select onChange={onChangeSelectHandler}
                                    placeholder="대상을 선택하세요."
                                >
                                    {Options.map((item, index) => (
                                        <option

                                            key={item.key}
                                            value={item.key}

                                        >
                                            {item.value}
                                        </option>
                                    ))}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>

                                <button

                                    onClick={onClickImageUpload}
                                >
                                    파일 첨부
                                </button>
                                <input
                                    style={{ display: 'none' }}
                                    type="file"
                                    name='noticeImage'
                                    accept='image/jpg,image/png,image/jpeg,image/gif'
                                    onChange={onChangeImageUpload}
                                    ref={imageInput}
                                />
                                {imageUrl && <img

                                    src={imageUrl}
                                    alt="preview"
                                />}
                            </td>
                        </tr>

                        <tr>
                            <th>
                                설문제목 : <input
                                    name='surTitle'
                                    placeholder='제목을 입력하세요.'

                                    onChange={onChangeHandler}
                                /></th>
                        </tr>
                        <tr>
                            <th>
                                설문항목 : <input
                                    name='ansContent'
                                    type='text'
                                    placeholder='제목을 입력하세요.'
                                    onChange={onChangeHandler}
                                />
                            </th>
                            
                        </tr>
                        <tr>
                            <th>
                                 <input
                                    name='ansContent'
                                    type='text'
                                    placeholder='제목을 입력하세요.'
                                    onChange={onChangeHandler}
                                />
                            </th>
                            
                        </tr>
                        <tr>
                            <th>
                                 <input
                                    name='ansContent'
                                    type='text'
                                    placeholder='제목을 입력하세요.'
                                    onChange={onChangeHandler}
                                />
                            </th>
                            
                        </tr>




                    </tbody>


                </table>
                <div>
                    <button

                        onClick={() => navigate(`/Survey`)}
                    >
                        목록으로
                    </button>
                    <button

                        onClick={onClickSurveyRegistrationHandler}
                    >
                        공지 등록
                    </button>
                </div>
            </div>


        </div>
    );

}



export default SurveyRegistration;