import re

# 정규식 패턴과 매칭되는 문자열 찾기
pattern = r'\d+'
string = 'hello 123 world 456'
result = re.findall(pattern, string)
print(result) # ['123', '456']

# 문자열 내의 패턴 치환하기
pattern = r'\s+'
string = 'hello  world'
result = re.sub(pattern, '_', string)
print(result) # 'hello_world'


# 문자열의 시작부터 정규식 패턴과 매칭되는지 확인하기
pattern = r'\d+'
string = '123 hello world'
match_obj = re.match(pattern, string)
if match_obj:
    print(match_obj.group()) # '123'


# 정규식에서 매칭된 문자열 그룹 추출하기
pattern = r'(\w+) (\d+)'
string = 'hello 123 world 456'
match_obj = re.search(pattern, string)
if match_obj:
    print(match_obj.group()) # 'hello 123'
    print(match_obj.group(1)) # 'hello'
    print(match_obj.group(2)) # '123'


# 문자열에서 모든 매칭된 결과 찾기
pattern = r'\d+'
string = 'hello 123 world 456'
result = re.findall(pattern, string)
print(result) # ['123', '456']


# 문자열 내의 패턴 치환하기
pattern = r'\s+'
string = 'hello  world'
result = re.sub(pattern, '_', string)
print(result) # 'hel

# 문자열에서 패턴으로 분리하기
pattern = r'\s+'
string = 'hello  world'
result = re.split(pattern, string)
print(result) # ['hello', 'world']


