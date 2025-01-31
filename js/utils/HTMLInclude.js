export const HTMLInclude = async (file, target) => {
  try {
    const response = await fetch(file);
    if (!response.ok) {
      console.log("네트워크 반응 오류");
    }
    const HTML = await response.text(); // 응답을 텍스트(HTML)로 변환
    document.querySelector(target).innerHTML = HTML; // HTML 삽입
  } catch (error) {
    console.log(error);
  }
};
