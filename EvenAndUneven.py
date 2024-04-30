def even_odd(lst):
    even_sum = 0
    odd_sum = 0

    for num in lst:
        if num % 2 == 0:
            even_sum += num
        else:
            odd_sum += num

    return even_sum, odd_sum

numbers_lst = [2, 5, 78, 93, 3, 15, 34, 7, 8, 5, 1, 9]
even, odd = even_odd(numbers_lst)

print("Even numbers:", even)
print("Odd numbers:", odd)