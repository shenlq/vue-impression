<template>
    <div :class="['mask', show?'':'hidden']"  @click.self="hide"></div>

    <div class="datepicker">
        <div class="datepicker-heading flexbox flex-align-center">
            <div class="datepicker-prev" @click="prevMonth">
                <span class="arrow arrow-lg arrow-left "></span>
            </div>
            <div class="datepicker-caption flex-item text-center">{{currentYear}}年{{currentMonth}}</div>
            <div class="datepicker-next" @click="nextMonth">
                <span class="arrow arrow-lg arrow-right"></span>
            </div>
        </div>
        <div class="datepicker-body">
            <ul class="datepicker-weekgroup">
                <li class="datepicker-weekgroup-item" v-for="week in option.week">{{week}}</li>
            </ul>
            <div class="datepicker-daygroup">
                <span class="datepicker-daygroup-item" v-for="day in days" Use track-by="$index">{{day}}</span>
            </div>
        </div>
        <div class="datepicker-footer"></div>
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
                        type: 'day',
                        week: ['日', '一', '二', '三', '四', '五', '六'],
                        month: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                        format: 'YYYY-MM-DD',
                        placeholder: '请选择时间',
                        buttons : {
                            ok : 'Ok',
                            cancel : 'Cancel'
                        }
                    }
                }
            }
        },
        data(){
            return {
                show: true,
                // 妈蛋，如果没有初始值，不会触发view更新
                currentYear: 0,
                currentMonth: 0,
                days: []
            };
        },
        ready(){
            this.getDays();
        },
        created(){
            this.currentMoment = moment();

        },
        methods: {
            getDays(){
                let days = [];
                let previousMonth = moment(this.currentMoment);
                previousMonth.subtract(1,'months');

                //当年、当月
                this.currentYear = this.currentMoment.year();
                this.currentMonth = this.option.month[this.currentMoment.month()];


                //当月天数
                let daysLength = this.currentMoment.daysInMonth();
                for(let i = 1; i <= daysLength; i++){
                    days.push(i);
                }
                //上个月天数
                let firstDay = moment(this.currentMoment).date(1).day();
                for (let i = 0; i <= firstDay - 1; i++) {
                    days.unshift(previousMonth.daysInMonth() - i);
                }
                //下个月天数
                let lastDay = moment(this.currentMoment).date(daysLength).day();
                for(let i = 1; i < 7 - lastDay; i++){
                    days.push(i);
                }

                this.days = days;
            },
            //隐藏
            hide(){
                this.show = false;
            },
            //上一个月
            prevMonth(){
                this.currentMoment = moment(this.currentMoment).subtract(1,'months');
                this.getDays();
            },
            //下一个月
            nextMonth(){
                this.currentMoment = moment(this.currentMoment).add(1,'months');
                this.getDays();
            }
        }
    }
</script>