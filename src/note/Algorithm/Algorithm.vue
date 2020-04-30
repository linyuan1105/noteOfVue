<template>
 <div>
     <el-row>
         <el-col :span="6">
             <h1>冒泡排序</h1>
         </el-col>
         <el-col :span="18">
            <p>比价任何两个相邻的项，如果第一个比第二个大，则交换他们的位置。
               交换次数和数组的项有关。
            </p>
         </el-col>
     </el-row>
     <el-row>
        <el-col :span="6">
           <h1>选择排序</h1>
        </el-col>
        <el-col :span="18">
           <p>每一次从待排序的数据元素中选出最小的（或最大）元素，存放在序列的起始位置
              以此循环，直至排序完毕；
           </p>
        </el-col>
     </el-row>
     <el-row>
        <el-col :span="6">
           <h1>插入排序</h1>
        </el-col>
        <el-col :span="18">
           <p>将一个数据插入到已经排好序的有序数据中，从而得到一个新的，个数加一的有序数据</p>
        </el-col>
     </el-row>
     <el-row>
        <el-col :span="6">
           <h1>归并排序</h1>
        </el-col>
        <el-col :span="18">
           <p>将原始序列切分成较小的序列，直到每个小序列无法再切分。然后执行合并，即将小的序列归并成大的序列
              ，合并过程进行比较排序，直到最后得到一个排序完毕的大序列。
           </p>
        </el-col>
     </el-row>
     <el-row>
        <el-col :span="6">
         <h1>快速排序</h1>
        </el-col>
        <el-col :span="18">
           <p>通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据都比另外一部分的所有数据都要小
              ，然后再按此方法对这两部分数据分别进行上述的递归排序，以此达到整个数据变成有序序列。
           </p>
        </el-col>
     </el-row>
     <el-row>
        <el-col :span="6">
         <h1>堆排序</h1>
        </el-col>
        <el-col :span="18"></el-col>
     </el-row>
     <el-row>
      <el-col :span="6">
       <h1>希尔排序</h1>
      </el-col>
      <el-col :span="18"></el-col>
   </el-row>
   <el-row>
      <el-col :span="6">
       <h1>桶排序</h1>
      </el-col>
      <el-col :span="18"></el-col>
   </el-row>
   <el-row>
      <el-col :span="6">
       <h1>基数排序</h1>
      </el-col>
      <el-col :span="18"></el-col>
   </el-row>

     <el-row>
        <a href="http://caibaojian.com/learn-javascript.html">关于前端的知识点</a>
     </el-row>
 </div>
</template>
<script>

</script>

