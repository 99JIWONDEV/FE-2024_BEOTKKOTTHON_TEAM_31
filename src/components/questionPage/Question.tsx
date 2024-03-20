import num1 from '../../assets/illust/illust_num1.svg';
import num2 from '../../assets/illust/illust_num2.svg';
import num3 from '../../assets/illust/illust_num3.svg';
import num4 from '../../assets/illust/illust_num4.svg';
import num5 from '../../assets/illust/illust_num5.svg';
import { useEffect, useState } from 'react';
import Footer from '../common/Footer';
import { ReactComponent as PrevBtn } from '../../assets/illust/illust_prev_btn.svg';
import { ReactComponent as HomeBtn } from '../../assets/illust/illust_home_btn.svg';
import AbledButton_sm from '../common/AbledButton_sm';
import DisabledButton_sm from '../common/DisabledButton_sm';

const Question = () => {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const ArrTest = [
    {
      domain: '언어영역',
      questionNum: 1,
      question: '다음 중 괄호 안에 상응하는 단어로 적합한 것은?',
      describeState: true,
      describe: '학생 : 중학생 = ( ) : 전철',
      selection: [
        {
          num: num1,
          name: '기차',
        },
        {
          num: num2,
          name: '지하철',
        },
        {
          num: num3,
          name: '버스',
        },
        {
          num: num4,
          name: '자동차',
        },
        {
          num: num5,
          name: '비행기',
        },
      ],
      answer: 2,
      explanation:
        '제시문은 상하 관계를 나타낸다. 중학생은 학생에 포함되며 전철은 대중교통에 포함된다. 따라서 학생 : 중학생 = 대중교통 : 전철이 답이다',
      count: 10,
      correctCount: 2,
      wrongCount: 8,
    },
    {
      domain: '언어영역',
      questionNum: 2,
      question: '다음 밑줄 친 단어의 의미와 가장 유사한 것은?',
      describeState: true,
      describe: '다시 봄이 오니 온 산과 들에 파릇파릇 새 생명이 넘쳐난다.',
      selection: [
        {
          num: num1,
          name: '다시 건강이 좋아져야지.',
        },
        {
          num: num2,
          name: '다른 방법으로 다시 한 번 해 봐.',
        },
        {
          num: num3,
          name: '다시 보아도 틀린 곳을 못 찾겠어.',
        },
        {
          num: num4,
          name: '웬만큼 쉬었으면 다시 일을 시작합시다.',
        },
      ],
      answer: 1,
      explanation:
        '부사 다시의 사전적 의미를 살펴보면, 1. 하던 것을 되풀이해서. 2. 방법이나 방향을 고쳐서 새로이. 3. 하다가 그친 것을 계속하여. 4. 다음에 또. 5. 이전 상태로 또 등이 있다. 제시문을 살펴보면 봄은 순환하므로, 이전 상태로 또의 뜻으로 쓰인 것을 알 수 있다. 이와 유사하게 쓰인 문장은 1번이다. 건강했던 이전 상태로 돌아가는 것이기 때문이다. 2번은 방법이나 방향을 고쳐서 새로이, 3번은 하던 것을 되풀이해서, 4번은 하다가 그친 것을 계속하여에 해당된다.',
      count: 10,
      correctCount: 2,
      wrongCount: 8,
    },
  ];

  useEffect(() => {
    setClickedIndex(null);
  }, [currentQuiz]);
  const handleToggle = (index: number) => {
    if (clickedIndex === index) {
      setClickedIndex(null);
    } else {
      setClickedIndex(index);
    }
  };
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-start overflow-hidden font-family">
      {/* 헤더 */}
      <div className="flex w-full flex-col items-center justify-start rounded-b-12 bg-main px-[16px] pb-[120px] pt-[24px]">
        <div className="flex w-full items-center justify-between">
          <PrevBtn className="shrink-0 cursor-pointer" onClick={() => {}} />
          <p className="text-white text-16 font-extrabold pl-[10px]">
            {ArrTest[currentQuiz].questionNum} of {ArrTest.length}
          </p>
          <HomeBtn className="shrink-0 cursor-pointer" onClick={() => {}} />
        </div>
        <div className="w-full mt-6">
          <div className="relative h-2 bg-white rounded-8 overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-[#80F756] rounded-l-8 "
              style={{ width: `${(ArrTest[currentQuiz].questionNum / ArrTest.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
      {/* 문제 박스 영역 */}
      <div className="w-full h-auto relative" style={{ boxShadow: '2px 4px 10px 0px rgba(72, 74, 100, 0.10)' }}>
        <div className="mx-4 -mt-[90px] h-auto bg-white flex flex-col justify-center overflow-hidden rounded-12 border-[1px] border-sub_200">
          {/* 문제 헤더 */}
          <div className="w-full flex items-start mt-6 mb-0 pr-6 pl-4 justify-between">
            <div className="text-14 font-semibold text-gray_400 leading-none">{ArrTest[currentQuiz].domain}</div>
            {clickedIndex !== null ? (
              <AbledButton_sm text="해당 문제 채점" onClick={() => {}} />
            ) : (
              <DisabledButton_sm text="해당 문제 채점" />
            )}
          </div>
          {/* 문제 설명 */}
          <div className="flex w-full flex-col mt-0 pl-4 leading-none">
            <div className="text-20 font-semibold text-main">Q{ArrTest[currentQuiz].questionNum}.</div>
            <div className="text-16 font-semibold text-gray_600 mt-2 pl-[2px]">{ArrTest[currentQuiz].question}</div>
          </div>
          {/* 구체적인 문제 */}
          <div className="flex w-full mt-4 justify-center">
            <div className="w-auto h-auto px-[75px] py-10 border-[2px] border-sub_300 flex items-center justify-center rounded-[10px] text-gray_500 text-16 font-medium">
              {ArrTest[currentQuiz].describe}
            </div>
          </div>
          {/* 문제 선택지 */}
          <div className="w-full my-6">
            <div className="mx-6 leading-none gap-y-3 flex flex-col justify-center">
              {ArrTest[currentQuiz].selection.map((item, index) => (
                <div
                  key={index}
                  className={`flex justify-center w-full h-12 items-center rounded-[10px] cursor-pointer ${
                    clickedIndex === index
                      ? 'bg-main text-14 font-semibold text-white'
                      : 'bg-gray-200 text-14 font-semibold text-gray-600'
                  }`}
                  onClick={() => handleToggle(index)}
                >
                  <div className="flex w-full">
                    <div className="flex items-center">
                      <img src={item.num} alt="number" className="mx-4" />
                    </div>
                    <div>{item.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* 그라데이션 푸터 */}
        <div className="w-full h-4">
          <div
            className="mx-8 h-full bg-[#C79CFC] blur-[1px] rounded-b-8 border-none"
            style={{ boxShadow: '2px 4px 10px 0px rgba(72, 74, 100, 0.10)' }}
          ></div>
        </div>
        <div className="w-full h-4">
          <div
            className="mx-12 h-full bg-[#9C61F7] blur-[1px] rounded-b-8 border-none"
            style={{ boxShadow: '2px 4px 10px 0px rgba(72, 74, 100, 0.10)' }}
          ></div>
        </div>
        {/* 이전, 다음 문제 버튼 */}
        <div className="w-full mt-6">
          <div className="mx-4 flex justify-between gap-x-4">
            {currentQuiz === 0 ? (
              <>
                {clickedIndex !== null ? (
                  <div
                    className="w-full h-[50px] border-[1px] border-main flex justify-center items-center rounded-8 text-white text-16 font-bold bg-main cursor-pointer"
                    onClick={() => setCurrentQuiz(currentQuiz + 1)}
                  >
                    다음 문제
                  </div>
                ) : (
                  <div className="w-full h-[50px] border-[1px] border-sun_100 flex justify-center items-center rounded-8 text-white text-16 font-bold bg-sub_100">
                    다음 문제
                  </div>
                )}
              </>
            ) : currentQuiz > 1 && currentQuiz < ArrTest.length ? (
              <>
                <div
                  className="w-full h-[50px] border-[1px] border-main flex justify-center items-center rounded-8 text-main text-16 font-bold cursor-pointer"
                  onClick={() => setCurrentQuiz(currentQuiz - 1)}
                >
                  이전 문제
                </div>
                {clickedIndex !== null ? (
                  <div
                    className="w-full h-[50px] border-[1px] border-main flex justify-center items-center rounded-8 text-white text-16 font-bold bg-main cursor-pointer"
                    onClick={() => setCurrentQuiz(currentQuiz + 1)}
                  >
                    다음 문제
                  </div>
                ) : (
                  <div className="w-full h-[50px] border-[1px] border-sun_100 flex justify-center items-center rounded-8 text-white text-16 font-bold bg-sub_100">
                    다음 문제
                  </div>
                )}
              </>
            ) : (
              <>
                <div
                  className="w-full h-[50px] border-[1px] border-main flex justify-center items-center rounded-8 text-main text-16 font-bold cursor-pointer"
                  onClick={() => setCurrentQuiz(currentQuiz - 1)}
                >
                  이전 문제
                </div>
                {clickedIndex !== null ? (
                  <div className="w-full h-[50px] border-[1px] border-main flex justify-center items-center rounded-8 text-white text-16 font-bold bg-main cursor-pointer">
                    최종 제출
                  </div>
                ) : (
                  <div className="w-full h-[50px] border-[1px] border-sun_100 flex justify-center items-center rounded-8 text-white text-16 font-bold bg-sub_100">
                    최종 제출
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      {/* 푸터 */}
      <Footer />
    </div>
  );
};

export default Question;
