"""
Implement the find_max_sum method that, efficiently with respect to time used,
returns the largest sum of any two elements in the given list of positive numbers.
For example, the largest sum of the list [5, 9, 7, 11] is the sum of the elements 9 and
11, which is 20.
"""


def find_max_sum(arr):
    arr.sort()
    max_1, max_2 = arr[-1], arr[-2]
    sum_ = max_2 + max_1
    return sum_


if __name__ == '__main__':
    arr = [5, 9, 7, 11]
    print(find_max_sum(arr))
