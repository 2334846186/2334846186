function my$(id) {
  return document.getElementById(id);
}
 
// ����innerText��textContent�ļ���������
// ���ñ�ǩ֮�������
function setInnerText(element, content) {
  // �жϵ�ǰ������Ƿ�֧�� innerText
  if (typeof element.innerText === 'string') {
    element.innerText = content;
  } else {
    element.textContent = content;
  }
}
 
 
function getInterval(start, end) {
  // �������ڶ������ĺ�����
  var interval = end - start;
  // �� ��������/Сʱ��/������/����
  var day, hour, minute, second;
 
  // �������ڶ�����������
  // interval = interval / 1000;
  interval /= 1000;
 
  day = Math.round(interval / 60 / 60 / 24);
  hour = Math.round(interval / 60 / 60 % 24);
  minute = Math.round(interval / 60 % 60);
  second = Math.round(interval % 60);
 
  return {
    day: day,
    hour: hour,
    minute: minute,
    second: second
  }
}