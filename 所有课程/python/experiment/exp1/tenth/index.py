#以键值对的方式存储下列数据：
#            1 → 王一，男，20
#            2 → 李丽，女，19
#            3 → 张二，男，None
#    并求出2号学生的姓名、3号学生的性别。
o = {
    1:["王一","男",20],
    2: ["李丽", "女", 19],
    3: ["张二", "男", "None"]
};
print(o);
print(o[2][0]);
print(o[3][1]);