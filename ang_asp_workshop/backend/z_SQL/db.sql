SELECT TOP (1000)
  [ID]
      , [Username]
      , [Password]
      , [Position]
      , [Created]
FROM [demopos].[dbo].[Users]


DELETE FROM [demopos].[dbo].[Users] WHERE [demopos].[dbo].[Users].Username <> 'admin'


UPDATE [demopos].[dbo].[Transactions] SET [demopos].[dbo].[Transactions].employee_id = '17'

DROP DATABASE IF EXISTS demopos


SELECT TOP (1000)
  [ID]
      , [Username]
      , [Password]
      , [Position]
      , [Created]
FROM [demopos].[dbo].[Users]

DELETE FROM [demopos].[dbo].[Transactions] WHERE [demopos].[dbo].[Transactions].transaction_id = 10