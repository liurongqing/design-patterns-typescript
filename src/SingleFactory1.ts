/**
 * 简单工厂模式
 * 通过传入不同的参数返回不同的对象
 */
class RuleConfigSource {
    load(ruleConfigFilePath: string) {
        const ruleConfigFileExtension = this.getFileExtension(ruleConfigFilePath)
        let parser = RuleConfigParserFactory.createParser(ruleConfigFileExtension)
        if (parser === null) {
            throw new Error('rule config file format is not supported' + ruleConfigFilePath)
        }

        let confitText = ''
        let ruleConfig = parser.parse(confitText)
        return ruleConfig
    }

    private getFileExtension(filePath: string) {
        return 'json'
    }
}

class RuleConfigParserFactory {
    static createParser(configFormat: string) {
        let parser = null
        if (configFormat === 'json') {
            parser = new JsonRuleConfigParser()
        } else if (configFormat === 'xml') {
            parser = new XmlRuleConfigParser()
        }
        return parser
    }
}

class JsonRuleConfigParser {
    parse(s: string) { }
}

class XmlRuleConfigParser {
    parse(s: string) { }
}