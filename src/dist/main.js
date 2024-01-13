"use strict";
exports.__esModule = true;
require("./style.css");
// Запросите у пользователя число, возведите это число во
// 2-ю степень и выведите на экран.
// const numbUser = prompt('Введите число', '0')
// alert(numbUser**2)
// Запросите у пользователя 2 числа и выведите среднее ариф-
// метическое этих чисел.
// let numbUser = parseFloat(prompt('Введите число', '0') as string)
// let numbUser2 = parseFloat(prompt('Введите число', '0') as string)
// alert((numbUser+numbUser2)/2)
// Запросите у пользователя длину стороны квадрата и вы-
// ведите площадь такого квадрата.
// let firstSide = prompt('Введите число', '0')
// alert(firstSide*firstSide)
// Реализуйте конвертор из километров в мили (пользователь
//     вводит километры, программа выводит мили). 1 км = 0,621371
//     миль. Это значение укажите в коде как константу.
// const km = 0.621371
// const resultUser = prompt('Введите число', '0')
// alert(resultUser*km)
// Реализуйте калькулятор. Пользователь вводит два числа,
// а программа выводит результаты действий + - * / между
// этими числами.
// let firstNumb = parseFloat(prompt('Введите число', '0'))
// let secondNumb = parseFloat(prompt('Введите число', '0') as string)
// alert(`${firstNumb+secondNumb} ${firstNumb-secondNumb} ${firstNumb*secondNumb} ${firstNumb/secondNumb}`)
// Запросите у пользователя текущее время (часы и минуты)
// и выведите, сколько часов и минут осталось до следующего
// дня.
// let hoursUser = parseFloat(prompt('hh:mm') as string)
// const remainsTxt = 'Часа(ов) осталось до завтрашнего дня'
// const dayHour = 24.00
// alert(dayHour-hoursUser + ` ${remainsTxt}`)
// Запросите у пользователя трехзначное число и выведите
// вторую цифру этого числа. Для решения задачи используйте
// оператор % (остаток от деления).
// Пользователь вводит значения a и b для формулы a * x + b = 0,
// а программа считает и выводит значение x.
// const meaningA = parseFloat(prompt('Введите значение для переменной а', '0') as string)
// const meaningB = parseFloat(prompt('Введите значение для переменной b', '0') as string)
// const calculations = {
//     meaningX: meaningA / (meaningB * (-1))
// }
// const textMeaning = 'Значение x равно - '
// alert(`${textMeaning}` + calculations.meaningX )
// Зарплата работника составляет $250 + 10% от продаж.
// Запросите общую сумму продаж за месяц и посчитайте
// зарплату.
// const salaryGuy = 250
// const procentToSalary = 0.10
// let summ = parseFloat(prompt('Введите общую сумму продаж за месяц', 10000) as string)
// alert(salaryGuy + (summ * procentToSalary))
// ДЗ
// 1
// Запросите у пользователя его имя и выведите в ответ:
// «Привет, его имя!».
// let name = prompt('Введите ваше имя')
// alert('Привет,' + ` ${name}`)
// 2
// Запросите у пользователя год его рождения, посчитайте,
// сколько ему лет и выведите результат. Текущий год укажите
// в коде как константу.
// let yO = prompt('Введите свой возраст', '2004')
// const currentYear = 2023
// alert(currentYear - yO)
// 3
// Запросите у пользователя длину стороны квадрата и вы-
// ведите периметр такого квадрата.
// let lenghtSqr = parseFloat(prompt('Введите длину стороны квадрата', ' 10 см')as string)
// alert (lenghtSqr * 4 + ' см')
// 5
// Запросите у пользователя расстояние в км между двумя
// городами и за сколько часов он хочет добраться. Посчи-
// тайте скорость, с которой необходимо двигаться, чтобы
// успеть вовремя.
// let distance = parseFloat(prompt('Введите расстояние в километрах', '200 км') as string)
// let timing = parseFloat(prompt('Введите время за которое хотите добраться', '3 часа') as string)
// let resultOf = Math.round(distance / timing) + " км/ч"
// alert(resultOf)
// Реализуйте конвертор валют. Пользователь вводит долла-
// ры, программа переводит в евро. Курс валюты храните в
// константе.
// const dollarExchangeRate = 90.50
// let userConvert = parseFloat(prompt('Введите количество золотых долларов, для того, чтобы перевести их в гнилые рубли', '777')as string)
// let convert = userConvert * dollarExchangeRate
// alert(convert + ' Рублей(я) будут стоить указанное кол-во долларов' )
// switch if else  ДЗ 
// Запросить у пользователя его возраст и определить, кем он
// является: ребенком (0–2), подростком (12–18), взрослым
// (18_60) или пенсионером (60– ...).
// let age = parseFloat(prompt('Введите свой возраст', '20') as string)
// if (age <= 2 ){
//     alert('Ты еще малыш совсем, ищи соску, как ты тут оказался')
// }
// else if(age <= 18){
//     alert('Ну уже неплохо, но молоко на губах не высохло, так что иди уроки делай')
// }
// else if(age <= 60){
//     alert('Ты либо очень старый, либо я ошибаюсь')
// }
// else {
//     alert('Ты ходячая пенсия, хотя если ты в России, не факт, скоро пенсионный возраст будет поднят до соточки')
// }
// 2
// Запросить у пользователя число от 0 до 9 и вывести ему
// спецсимвол, который расположен на этой клавише (1–!,
// 2–@, 3–# и т. д).
// let numberInt = parseFloat(prompt('Введите число от 0 до 9', '0-9') as string)
// switch (numberInt) {
//     case 1:
//         alert('!')
//         break
//     case 2:
//         alert('@')
//         break
//     case 3:
//         alert('#')
//         break
//     case 4:
//         alert('$')
//         break
//     case 5:
//         alert('%')
//         break
//     case 6:
//         alert('^')
//         break
//     case 7:
//         alert('&')
//         break
//     case 8:
//         alert('*')
//         break
//     case 9:
//         alert('(')
//         break
//     default:
//         alert('Введенное значение не найдено, введите цифру из диапазона от 0 до 9')
// }
// 6
// Написать конвертор валют. Пользователь вводит количе-
// ство USD, выбирает, в какую валюту хочет перевести: EUR,
// UAN или AZN, и получает в ответ соответствующую сумму.
// let breefOf = prompt('Введите в какую валюту вы хотите перевести свои любимые рубли, EUR, UAN, AZN','Eur')
// let exchangeValue = parseFloat(prompt('Введите количество денег, которые вы хотели бы перевести в калькуляторе валют', '10000') as string)
// const course = {
//     Eur: 100.76,
//     Uan: 12.59,
//     Azn: 53.24
// }
// switch(breefOf){
//     case 'Eur': 
//     alert(exchangeValue * course.Eur)
//     break
//     case 'Uan':
//     alert(exchangeValue * course.Uan)
//     break
//     case 'Azn':
//     alert(exchangeValue * course.Azn)
//     break
//     default:
//         alert('Вы ввели что то не так, проверьте еще раз, первая буква в названии валюты должна быть заглавной')
// }
// 7
// Запросить у пользователя сумму покупки и вывести сумму
// к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300
// до 500 – 5%, от 500 и выше – 7%.
// let summWithoutSale = parseFloat(prompt('Введите сумму покупки', '2500') as string)
// const textAlert = `К оплате со скидкой: `
// if (summWithoutSale <= 300){
//     alert(textAlert + (summWithoutSale - (summWithoutSale * 0.030)))
// }
// else if (summWithoutSale <= 500){
//     alert(textAlert + (summWithoutSale - (summWithoutSale * 0.050)))
// }
// else if (summWithoutSale >= 501 ){
//     alert(textAlert + (summWithoutSale - (summWithoutSale * 0.070)))
// }
// else {
//     alert('Упс, что-то не так, попробуйте еще раз')
// }
// Задать пользователю 3 вопроса, в каждом вопросе по 3 ва-
// рианта ответа. За каждый правильный ответ начисляется 2
// балла. После вопросов выведите пользователю количество
// набранных баллов.
// const answers = {
//     answerFirst: prompt('Сколько у человека хромосом?', 'Варианты ответов: 46, 48, 44'),
//     answerSecond: prompt('Сколько у человека ребер в теле?', 'Варианты ответов: 18, 16, 24'),
//     answerThird: prompt('Сколько часовых поясов в мире?', 'Варианты ответов: 23, 7, 24, 9')
// }
// let points = 0
// if (answers.answerFirst == '46'){
//     points += 2
// }
// if (answers.answerSecond == '24'){
//     points += 2
// }
// if (answers.answerThird == '24'){
//     points += 2
// }
// if(points > 0){
//     alert(`Вы набрали ${points} Очка(ов)`)
// }
// else {
//     alert('К сожалению вы не набрали ни одного очка, попробуйте еще раз')
// }
// Запросить дату (день, месяц, год) и вывести следующую
// за ней дату. Учтите возможность перехода на следующий
// месяц, год, а также високосный год.
// let intDay = parseFloat(prompt('Введите сегодняшнее число', '22')as string)
// let intMonth = parseFloat(prompt('Введите сегодняшнее число', '05')as string)
// let intYear = parseFloat(prompt('Введите сегодняшнее число', '2023')as string)
// let zero = '0'
// if (intMonth == 1 || intMonth == 3 || intMonth == 5 || intMonth == 7 || intMonth == 8 || intMonth == 10 || intMonth == 12){
//     if (intDay == 31) {
//         intDay = 0
//         intMonth++
//     }
//     if (intMonth == 12) intMonth = 1
// } else {
//     if (intDay == 30) {
//         intDay = 0
//         intMonth++
//     }
//     if (intMonth == 2) {
//         if (intDay == 29) {
//             intDay = 0
//             intMonth++
//         }
//         if (intDay == 28) {
//             if ((intYear%4==0 && intYear%100!=0) || intYear%400==0 ) {
//             } else {
//                 intDay = 0
//                 intMonth++
//             }
//         }
//     }
// }
// intDay += 1
// let resultDate =  intDay + ' ' + zero + intMonth + ' ' + intYear
// alert(resultDate)
// let password
// let login = prompt('Кто там','')
// if (login == 'Админ') {
//     password = prompt('Пароль','')
//     if(password == 'Я главный'){
//         alert('Здравствуйте')
//     }
//     else if(login  === null){
//         alert('Отменено')
//     }
//     else {
//         alert('Неверный пароль')
//     }
// }
// if (login != 'Админ'){
//     alert('Я вас не знаю')
// }
// const number = +prompt('Введите число между 0 и 3', '')
// switch (number){
//     case 0:
//         alert('Вы ввели число 0')
//     break
//     case 1:
//         alert('Вы ввели число 1')
//     break
//     case 3:
//         alert('Вы ввели число 2 а может и 3')
//         break
//         default:
//             alert('Введи нормально идиот')
// }
// let age  = +prompt('Введите свой возраст', ' 15')
// if (age >= 14 && age <= 90){
//     alert(true)
// }
// else if(age < 14 || age > 90){
//     alert(false)
// }
// else{
//     alert('Введи нормально')
// }
// 1
// Запросить у пользователя номер месяца и вывести на экран
// его название.
// let monthInt = parseFloat(prompt('Введите месяц цифрой', '1')as string)
// switch(monthInt){
//     case 1:
//         alert('Январь')
//         break
//         case 2:
//         alert('Февраль')
//         break
//         case 3:
//         alert('Март')
//         break
//         case 4:
//         alert('Апрель')
//         break
//         case 5:
//         alert('Май')
//         break
//         case 6:
//         alert('Июнь')
//         break
//         case 7:
//         alert('Июль')
//         break
//         case 8:
//         alert('Август')
//         break
//         case 9:
//         alert('Сентябрь')
//         break
//         case 10:
//         alert('Октябрь')
//         break
//         case 11:
//         alert('Ноябрь')
//         break
//         case 12:
//         alert('Декабрь')
//         break
//         default:
//             alert('Дурак?????????????????????')
// }
// 2
// Реализовать калькулятор. Пользователь вводит 2 числа и
// знак (+ - * /). В зависимости от введенного знака решить
// пример и вывести результат.
// let calcPrompt1 = parseFloat(prompt('Введите число или цифру для вычислений','2')as string)
// let symbolInt = prompt('Ввдеите знак, который будет производить вычисление', ' +, /, *, -')
// let calcPrompt2 = parseFloat(prompt('Введите число или цифру для вычислений','10')as string)
// switch(symbolInt){
//     case '+':
//         alert(calcPrompt1 + calcPrompt2)
//         break
//         case '-':
//             alert(calcPrompt1 - calcPrompt2)
//             break
//             case '*':
//                 alert(calcPrompt1 * calcPrompt2)
//                 break
//                 case '/':
//         alert(calcPrompt1 / calcPrompt2)
//         break
//         default:
//             alert('Дурак?????????????????????')
// }
// 1
// Запросить 2 числа и вывести большее из них.
// let intNumb = parseFloat(prompt('Введите число', '30')as string)
// let intNumb2 = parseFloat(prompt('Введите число', '10')as string)
// let difference = (intNumb > intNumb2 || intNumb < intNumb2) ? 'Первое число больше второго': 'Второе число больше первого' 
// alert(difference)
// let i = 0 
// while (i < 3){
//     alert(`number ${i}!`)
//     i++
// }
// let intNumber = +(prompt('Введите число >100', '0') as string)
// for (intNumber; intNumber>100; ){
//     if(intNumber!>100) {
//         alert(intNumber) 
//         continue
//     }
//     else{
//        alert('thanks') 
//     }
// }
// let i = 2
// let n = 10
// for(i; i<=n; i++){
//     let isSimple = true
//     for (let j = 2; j<i;j++){
//         if (i%j > 0) {
//             isSimple = false
//             break
//         }
//     }
//     if (isSimple)
// }
// Подсчитать сумму всех чисел в заданном пользователем
// диапазоне.
// let a = parseFloat(prompt('Введите число в любом диапазоне от нуля', '')as string)
// let n = parseFloat(prompt('Введите число в любом диапазоне от нуля', '')as string)
// let sum = 0
// while (a<=n){
//     sum+=a
//     a++
// }
// alert(sum)
// Зациклить калькулятор. Запросить у пользователя 2 числа
// и знак, решить пример, вывести результат и спросить, хо-
// чет ли он решить еще один пример. И так до тех пор, пока
// пользователь не откажется.
// let answer = true
// while (answer) {
//   let intNumb1 = parseFloat(prompt('Введите число/цифру, которое хотите вычислить', '12') as string)
//   let intSign = prompt('Введите знак, который будет вычислять', '+ - * /')
//   let intNumb2 = parseFloat(prompt('Введите число/цыфру, которое хотите вычислить', '12') as string)
//   let res = 0
//   switch (intSign) {
//     case '-':
//       res = intNumb1 - intNumb2
//       break
//     case '+':
//       res = intNumb1 + intNumb2
//       break
//     case '*':
//       res = intNumb1 * intNumb2
//       break
//     case '/':
//       res = intNumb1 / intNumb2
//       break
//   }
//   answer = confirm(`Результат ${res}. Посчитать что-нибудь ещё?`)
// }
// 8
// Зациклить вывод дней недели таким образом: «День недели.
// Хотите увидеть следующий день?» и так до тех пор, пока
// пользователь нажимает OK.
// let day = true;
// let nextDay = prompt('Напишите сегодняшний день, чтобы увидеть следующий', 'Пятница') as string;
// while (day) {
//   switch (nextDay) {
//     case 'Понедельник':
//       nextDay = 'Вторник'
//       break
//     case 'Вторник':
//       nextDay = 'Среда'
//       break
//     case 'Среда':
//       nextDay = 'Четверг'
//       break
//     case 'Четверг':
//       nextDay = 'Пятница'
//       break
//     case 'Пятница':
//       nextDay = 'Суббота'
//       break
//     case 'Суббота':
//       nextDay = 'Воскресенье'
//       break
//     case 'Воскресенье':
//       nextDay = 'Понедельник'
//       break
//     default:
//       nextDay = 'Понедельник'
// }
//   day = confirm(`Cледующий день ${nextDay}, хотите узнать следующий день?`);
// }
// 3
// Запросить число и степень. Возвести число в указанную
// степень и вывести результат.
// let intNumber = parseFloat(prompt('Введите число, которое будете возводить в степень','22')as string)
// let degreeInt = parseFloat(prompt('Введите степень, в которую будете возводить число','2')as string)
// let resultOfCalc = 1;
// while (degreeInt > 0) {
//     resultOfCalc *= intNumber;
//     degreeInt--;
// }
// alert(resultOfCalc)
// 1
// Предлагать пользователю решить пример 2 + 2 * 2 до тех
// пор, пока он не решит его правильно.
// let intAnswer
// do{
//     intAnswer = parseFloat(prompt('Решите пример 2 + 2 * 2, введите ответ в строку','')as string)
//     if(intAnswer == 6){
//         alert('Молодчина')
//     } else if(intAnswer != 6){
//        alert('Все плохо, пробуем еще раз')
//     }
// } while(intAnswer != 6)
// 3
// Вывести все числа от 1 до 100, которые кратные указанному
// пользователем числу.
// let intNumb = parseFloat(prompt('Введите число, а я выведу все кратные числа от 0 до 100', '30')as string)
// for(let i = 1; i<=100;  i++){
//     if(i % intNumb == 0){
//         alert(i)
//     }
// }
// 5
// Запросить число и проверить, простое ли оно. Простое
// число делится без остатка только на себя и на единицу.
// let intNumber = parseFloat(prompt('Введите число, а я проверю простое ли оно','25')as string)
// let isPrime = true
// for (let i = 2; i<=intNumber / 2; i++){
//     if(intNumber/i == 0){
//         isPrime = false
//         break
//     }
//     if (isPrime) {
//         alert('Ваше число простое');
//     } else {
//         alert('Вы ввели не простое число');
// }
// }
// 1
// Написать функцию, которая принимает 2 числа и возвра-
// щает меньшее из них.
// let a:any = prompt('Введите число, а я выведу то, которое больше','10')
// let b:any = prompt('Введите число, а я выведу то, которое больше','22')
// function defference(a:any,b:any){
//     if(a<b){
//         alert(`${b} больше`)
//     }
//     else{
//         alert(`${a} больше`)
//     }
//     return
// }
// defference(a,b)
// 2
// Написать функцию, которая возводит переданное число
// в указанную степень.
// let numbToDegree = parseFloat(prompt('Введите число, а я возведу его в степень','3')as string)
// let degree = parseFloat(prompt('Введите степень, в которую надо возвести число, которое вы ввели выше','2')as string)
// function degreeCalculation(numbToDegree:any, degree:any){
//     let resultOfCalculation = numbToDegree**degree
//     alert(`Ответ: ${resultOfCalculation}`)
//     return
// }
// degreeCalculation(numbToDegree,degree)
// 3
// Написать функцию, которая принимает 2 числа и знак
// (+ - * /), считает пример и возвращает результат.
// let intNumber = parseFloat(prompt('Введите число/цифру, а я посчитаю его', '12')as string)
// let intSign = prompt('Введите знак, для дальнейших вычислений', '-, +, /, *')
// let intNumber2 = parseFloat(prompt('Введите число/цифру, а я посчитаю его', '22')as string)
// function userCalculation(intNumber: any, intSign:any, intNumber2: any) {
//     let resultOf;
//     switch (intSign) {
//         case '-':
//             resultOf = intNumber - intNumber2
//             break
//         case '+':
//             resultOf = intNumber + intNumber2
//             break
//         case '/':
//             resultOf = intNumber / intNumber2
//             break
//         case '*':
//             resultOf = intNumber * intNumber2
//             break
//     }
//     alert(resultOf)
//     return
// }
// userCalculation(intNumber,intSign,intNumber2)
// 8
// Написать функцию, которая принимает от 1 до 5 чисел и
// возвращает большее из них.
// let intNumbers = 0
// let intNumbers2 = 0 
// let intNumbers3 =  0
// let intNumbers4 = 0
// let intNumbers5 = 0
// function booleanResult(intNumbers,intNumbers2,intNumbers3,intNumbers4,intNumbers5){
//     return intNumbers + intNumbers2
// }
//Функция, которая может принимать неограниченное количество переменных
// function getNmax(...args:any){
//     let sum = 0
//     for (let i = 0;i<args.lenght;i++){
//         sum+=args[i]
//     }
//     return sum
// }
// console.log(getN)
