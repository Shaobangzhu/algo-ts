/**
 * 88. Merge Sorted Array
 * Given two integer arrays nums1 and nums2, sorted in non-decreasing order. 
 * The final sorted array should not be returned by the function, but instead be sorted inside the array nums1.
 * Time Complexity: O(m+n)
 * Space Complexity: O(1)
 * @param nums1 
 * @param m number of the elements in nums1
 * @param nums2 
 * @param n number of the elements in nums2
 */
export function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while(j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--; 
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
}