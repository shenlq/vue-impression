<template>
    <div>
        <div :class="['mask', show?'':'hidden']"  @click.self="hide"></div>

        <div :class="['datepicker', show?'':'hidden']">
            <div class="datepicker-header flexbox flex-align-center">
                <div class="datepicker-prev" @click="prevMonthHandle">
                    <span class="arrow arrow-lg arrow-left "></span>
                </div>
                <div class="datepicker-caption flex-item text-center" @click="toggleMonthOptionHandle">{{currentYear}}年{{currentMonth}}月</div>
                <div class="datepicker-next" @click="nextMonthHandle">
                    <span class="arrow arrow-lg arrow-right"></span>
                </div>
            </div>
            <div class="datepicker-body">
                <div :class="[showDay?'':'hidden']">
                    <ul class="datepicker-weekgroup">
                        <li class="datepicker-weekgroup-item" v-for="week in option.week">{{week}}</li>
                    </ul>
                    <div class="datepicker-daygroup">
                        <div @click="setDayHandle(day)"
                            :class="['datepicker-daygroup-item',
                            (day.inMonth || day.checked)?'':'text-muted',
                            day.isToday && !day.checked?'label':'',
                            day.isToday && !day.checked?'label-primary-outline':'',
                            day.checked?'label':'',
                            day.checked?'label-secondary':'']" v-for="day in days" track-by="$index">
                            {{day.text}}
                        </div>
                    </div>
                </div>
                <div :class="['flexbox', showMonth?'':'hidden']">
                    <div class="datepicker-yeargroup flex-item text-center J_YearOption">
                        <div @click="setYearHandle(year)" :class="['datepicker-yeargroup-item', year==currentYear?'active':'']" v-for="year in years" track-by="$index">
                            {{year}}
                        </div>
                    </div>
                    <div class="datepicker-monthgroup flex-item text-center J_MonthOption">
                        <div @click="setMonthHandle(month)" :class="['datepicker-monthgroup-item', month==currentMonth?'active':'']" v-for="month in option.month">
                            {{month}}月
                        </div>
                    </div>
                </div>
            </div>
            <div class="datepicker-footer"></div>
        </div>
    </div>
</template>


<script>
    import moment from 'moment';

    export default {
        props: {
            option: {
                type: Object,
                default() {
                    return {
                        week: ['日', '一', '二', '三', '四', '五', '六'],
                        month: ['01','02','03','04','05','06','07','08','09','10','11','12'],
                        format: 'YYYY-MM-DD',
                    }
                }
            },
            show: {
                type: Boolean,
                default: false,
                twoWay: true
            },
            syncComponent: {
            }
        },
        data(){
            return {
                showDay: true,
                showMonth: false,
                // 妈蛋，如果没有初始值，不会触发view更新
                currentYear: 0,
                currentMonth: 0,
                days: [],
                years: [],
                today: moment().format(this.option.format),
                value: undefined
            };
        },
        created(){
            this.syncComponent && (this.value = this.syncComponent.getValue());
            this.currentMoment = this.value? moment(this.value, this.option.format) : moment();
            this.getDays();
        },
        ready(){
            this.yearOptionScrollHandle();
        },
        methods: {
            getValue(){
                return this.value;
            },
            //隐藏
            hide(){
                this.show = false;
            },
            //获取当月及邻月天
            getDays(){
                let days = [];
                let previousMonth = moment(this.currentMoment).subtract(1,'months');
                let nextMonth = moment(this.currentMoment).add(1,'months');

                //当年、当月
                this.currentYear = this.currentMoment.format('YYYY');
                this.currentMonth = this.currentMoment.format('MM');


                //当月天数
                let daysLength = this.currentMoment.daysInMonth();
                for(let i = 1; i <= daysLength; i++){
                    let dayFomat = `${this.currentYear}-${this.currentMonth}-${i.toString().length>1?i:'0'+i}`;

                    days.push({
                        text: i,
                        checked: this.value == dayFomat,
                        inMonth: true,
                        isToday: this.today == dayFomat,
                        value: dayFomat
                    });
                }
                //上个月天数
                let firstDay = moment(this.currentMoment).date(1).day();
                let previousMonthFormat = previousMonth.format('YYYY-MM');
                for (let i = 0; i <= firstDay - 1; i++) {
                    let day = previousMonth.daysInMonth() - i;
                    let dayFomat = `${previousMonthFormat}-${day.toString().length>1?day:'0'+day}`;


                    days.unshift({
                        text: previousMonth.daysInMonth() - i,
                        checked: this.value == dayFomat,
                        inMonth: false,
                        isToday: this.today == dayFomat,
                        value: dayFomat
                    });
                }
                //下个月天数
                let lastDay = moment(this.currentMoment).date(daysLength).day();
                let nextMonthFormat = nextMonth.format('YYYY-MM');
                for(let i = 1; i < 7 - lastDay; i++){
                    let dayFomat = `${nextMonthFormat}-${i.toString().length>1?i:'0'+i}`;

                    days.push({
                        text: i,
                        checked: this.value == dayFomat,
                        inMonth: false,
                        isToday: this.today == dayFomat,
                        value: dayFomat
                    });
                }

                this.days = days;
            },
            //获取年份
            getYears(){
                let year = [];
                let currentYear = Number(this.currentYear);
                for(let i = currentYear - 5; i <= currentYear + 5; i++){
                    year.push(i);
                }
                this.years = year;

                this.$nextTick(() => {
                    let yearGroupDom = this.$el.querySelectorAll(".datepicker-yeargroup-item.active")[0];
                    this.$el.querySelectorAll(".J_YearOption")[0].scrollTop = yearGroupDom.offsetTop - 100;

                    let monthGroupDom = this.$el.querySelectorAll(".datepicker-monthgroup-item.active")[0];
                    this.$el.querySelectorAll(".J_MonthOption")[0].scrollTop = monthGroupDom.offsetTop - 100;
                });
            },
            //上一个月
            prevMonthHandle(){
                this.currentMoment.subtract(1,'months');
                this.getDays();
            },
            //下一个月
            nextMonthHandle(){
                this.currentMoment.add(1,'months');
                this.getDays();
            },
            //选中时间
            setDayHandle(day){
                this.value = day.value;
                this.days = this.days.map(day => {
                    return {
                        ...day,
                        checked: day.value == this.value
                    };
                });
                this.show = false;
                this.syncComponent.setValue(this.value);
            },
            //选中年
            setYearHandle(year){
                this.currentMoment = this.currentMoment.year(Number(year));
                this.getDays();
                this.currentYear = year;
            },
            //选中月
            setMonthHandle(month){
                this.currentMoment = this.currentMoment.month(Number(month - 1));
                this.getDays();
                this.toggleMonthOptionHandle();
            },
            //显示年月选择
            toggleMonthOptionHandle(){
                this.showDay = !this.showDay;
                this.showMonth = !this.showMonth;
                this.showMonth && this.getYears();
            },
            //年份滚动侦听
            yearOptionScrollHandle(){
                // 动态添加year
                let yearOptionDom = this.$el.querySelectorAll(".J_YearOption")[0];
                yearOptionDom.addEventListener('scroll', e => {
                    if (yearOptionDom.scrollTop > yearOptionDom.scrollHeight - 300) {
                        let lastYear = this.years[this.years.length - 1];
                        this.years.push(lastYear + 1);
                    }

                    if(yearOptionDom.scrollTop == 0){
                        let firstYear = this.years[0];
                        this.years.unshift(firstYear - 5,firstYear - 4, firstYear - 3,firstYear - 2, firstYear - 1);
                    }
                }, false)
            }
        }
    }
</script>